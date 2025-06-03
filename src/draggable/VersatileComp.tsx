import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useRotatedImage } from "../shared/useRotateImg";
import { FrameCoords, Size, VersatileImage } from '../shared/TypeRepository';
import { frameCoordsWithRotate } from '../shared/frameCoordsWithRotate';

const cornerSize = 10;
const centerSize = 10;

interface VersatileCompProps {
  isSelected: boolean;
  onSelect: (id: number) => void;
  data: VersatileImage;
}


const VersatileComp = ({ isSelected, onSelect, data: { id, dropPosition, initialSize, imageSrc, rotateState, zIndex, isFixed } }: VersatileCompProps) => {
  const [corners, setCorners] = useState<FrameCoords>(frameCoordsWithRotate(dropPosition, initialSize, false));
  const [size, setSize] = useState<Size>({
    width: corners.ne.x - corners.nw.x,
    height: corners.sw.y - corners.nw.y
  });
  const isResizing = useRef(false);
  const isMoving = useRef(false);
  const diffCenter = useRef({ diffX: 0, diffY: 0 });
  const dragHandle = useRef<string | null>(null);
  const prevRotateState = useRef(rotateState);

  useEffect(() => {
    setSize({
      width: corners.ne.x - corners.nw.x,
      height: corners.se.y - corners.ne.y
    });
  }, [corners]);

  // ------------------------------------------------------------
  // Resize
  // ------------------------------------------------------------
  const handleMouseDown = (e: React.MouseEvent, handle: string) => {
    e.stopPropagation();
    if (isFixed) return;
    isResizing.current = true;
    dragHandle.current = handle;
  };

  useEffect(() => {
    const handleMouseMoveForResize = (e: MouseEvent) => {
      if (isFixed) return;
      if (!isResizing.current) return;
      switch (dragHandle.current) {
        case "nw": // 왼쪽 위
          setCorners(prev => {
            if (e.clientX < prev.se.x && e.clientY < prev.se.y) {
              return {
                ...prev,
                nw: { x: e.clientX, y: e.clientY },
                ne: { x: prev.ne.x, y: e.clientY },
                sw: { x: e.clientX, y: prev.sw.y },
                se: { x: prev.se.x, y: prev.se.y },
                center: { x: (e.clientX + prev.se.x) / 2, y: (e.clientY + prev.se.y) / 2 }
              };
            }
            return prev;
          });
          break;
        case "ne": // 오른쪽 위
          setCorners(prev => {
            if (e.clientX > prev.sw.x && e.clientY < prev.sw.y) {
              return {
                ...prev,
                ne: { x: e.clientX, y: e.clientY },
                nw: { x: prev.nw.x, y: e.clientY },
                se: { x: e.clientX, y: prev.se.y },
                sw: { x: prev.sw.x, y: prev.sw.y },
                center: { x: (e.clientX + prev.sw.x) / 2, y: (e.clientY + prev.sw.y) / 2 }
              };
            }
            return prev;
          });
          break;
        case "sw": // 왼쪽 아래
          setCorners(prev => {
            if (e.clientX < prev.ne.x && e.clientY > prev.ne.y) {
              return {
                ...prev,
                sw: { x: e.clientX, y: e.clientY },
                se: { x: prev.se.x, y: e.clientY },
                nw: { x: e.clientX, y: prev.nw.y },
                ne: { x: prev.ne.x, y: prev.ne.y },
                center: { x: (e.clientX + prev.ne.x) / 2, y: (e.clientY + prev.ne.y) / 2 }
              };
            }
            return prev;
          });
          break;
        case "se": // 오른쪽 아래
          setCorners(prev => {
            if (e.clientX > prev.nw.x && e.clientY > prev.nw.y) {
              return {
                ...prev,
                se: { x: e.clientX, y: e.clientY },
                sw: { x: prev.sw.x, y: e.clientY },
                ne: { x: e.clientX, y: prev.ne.y },
                nw: { x: prev.nw.x, y: prev.nw.y },
                center: { x: (e.clientX + prev.nw.x) / 2, y: (e.clientY + prev.nw.y) / 2 }
              };
            }
            return prev;
          });
          break;
      }
    };

    const handleMouseUp = () => {
      isResizing.current = false;
      isMoving.current = false;
      dragHandle.current = null;
    };

    document.addEventListener("mousemove", handleMouseMoveForResize);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMoveForResize);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isFixed]);


  // ------------------------------------------------------------
  // Move
  // ------------------------------------------------------------
  const handleMouseDownForMove = (e: React.MouseEvent) => {
    e.stopPropagation();
    onSelect(id);
    if (isFixed) return;
    isMoving.current = true;
    const diffX = e.clientX - corners.center.x;
    const diffY = e.clientY - corners.center.y;
    diffCenter.current = { diffX, diffY };
  }

  useEffect(() => {
    const handleMouseMoveForMove = (e: MouseEvent) => {
      if (isFixed) return;
      if (isMoving.current) {
        const dx = e.clientX - diffCenter.current.diffX;
        const dy = e.clientY - diffCenter.current.diffY;

        setCorners(prev => ({
          center: {
            x: dx,
            y: dy
          },
          nw: { x: dx - (prev.ne.x - prev.nw.x) / 2, y: dy - (prev.sw.y - prev.nw.y) / 2 },
          ne: { x: dx + (prev.ne.x - prev.nw.x) / 2, y: dy - (prev.sw.y - prev.nw.y) / 2 },
          sw: { x: dx - (prev.ne.x - prev.nw.x) / 2, y: dy + (prev.sw.y - prev.nw.y) / 2 },
          se: { x: dx + (prev.ne.x - prev.nw.x) / 2, y: dy + (prev.sw.y - prev.nw.y) / 2 },
        }));
      }
    }

    const handleMouseUpForMove = () => {
      isMoving.current = false;
      diffCenter.current = { diffX: 0, diffY: 0 };
    }

    document.addEventListener("mousemove", handleMouseMoveForMove);
    document.addEventListener("mouseup", handleMouseUpForMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMoveForMove);
      document.removeEventListener("mouseup", handleMouseUpForMove);
    };
  }, [isFixed]);

  // ------------------------------------------------------------
  // Rotate
  // ------------------------------------------------------------
  const rotatedImageSrc = useRotatedImage(imageSrc, rotateState * 90);

  useEffect(() => {
    console.log('rotateState useEffect!!!');
    if (prevRotateState.current !== rotateState) {
      console.log('rotateState changed:', rotateState);
      setCorners((prev) => frameCoordsWithRotate(prev.center, size, true));
      prevRotateState.current = rotateState;
    }
  }, [rotateState]);



  return (
    <VersatileDiv
      style={{
        position: 'fixed',
        left: corners.nw.x,
        top: corners.nw.y,
        width: size.width,
        height: size.height,
        zIndex: zIndex
      }}
    >
      {isSelected && (
        <>
          <CornerHandle
            style={{
              position: 'fixed',
              left: corners.nw.x - cornerSize / 2,
              top: corners.nw.y - cornerSize / 2
            }}
            onMouseDown={(e) => handleMouseDown(e, "nw")}
          />
          <CornerHandle
            style={{
              position: 'fixed',
              left: corners.ne.x - cornerSize / 2,
              top: corners.ne.y - cornerSize / 2
            }}
            onMouseDown={(e) => handleMouseDown(e, "ne")}
          />
          <CornerHandle
            style={{
              position: 'fixed',
              left: corners.sw.x - cornerSize / 2,
              top: corners.sw.y - cornerSize / 2
            }}
            onMouseDown={(e) => handleMouseDown(e, "sw")}
          />
          <CornerHandle
            style={{
              position: 'fixed',
              left: corners.se.x - cornerSize / 2,
              top: corners.se.y - cornerSize / 2
            }}
            onMouseDown={(e) => handleMouseDown(e, "se")}
          />
          <CenterHandle
            style={{
              position: 'fixed',
              left: corners.center.x - centerSize / 2,
              top: corners.center.y - centerSize / 2
            }}
          />
        </>
      )}

      <CenterImage
        src={rotatedImageSrc || imageSrc}
        alt="center image"
        style={{
          position: 'fixed',
          left: corners.center.x - (size.width * 0.8) / 2,
          top: corners.center.y - (size.height * 0.8) / 2,
          width: size.width * 0.8,
          height: size.height * 0.8,
        }}
      />
      <BigCenterHandle
        style={{
          position: 'fixed',
          left: corners.center.x - (size.width * 0.9) / 2,
          top: corners.center.y - (size.height * 0.9) / 2,
          width: size.width * 0.9,
          height: size.height * 0.9
        }}
        onMouseDown={(e) => handleMouseDownForMove(e)}
      />
    </VersatileDiv >
  );
}


const CornerHandle = styled.div`
  width: 10px;
  height: 10px;
  background-color: #3B82F6;
  cursor: pointer;
  z-index: 2;

  &:hover {
    background-color: #2563EB;
  }
`;

const CenterHandle = styled.div`
  width: 10px;
  height: 10px;
  background-color: #EF4444;
  z-index: 5;
`;

const BigCenterHandle = styled.div`
  opacity: 0.2;
  background-color: transparent;
  background-color: #FE9135;
  z-index: 4;
  &:hover {
    background-color: #E05F1D;
  }
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterImage = styled.img`
  z-index: 3;
`;

const VersatileDiv = styled.div`
  position: relative;
  background-color: beige;
  z-index: 1;
`;

export default VersatileComp;