import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const cornerSize = 10;
const centerSize = 10;

const VersatileComp = () => {
  const [corners, setCorners] = useState({
    nw: { x: 100, y: 100 },
    ne: { x: 300, y: 100 },
    sw: { x: 100, y: 300 },
    se: { x: 300, y: 300 },
    center: { x: 200, y: 200 }
  });
  const [size, setSize] = useState({
    width: corners.ne.x - corners.nw.x,
    height: corners.sw.y - corners.nw.y
  });
  const isDragging = useRef(false);
  const dragHandle = useRef<string | null>(null);


  useEffect(() => {
    setSize({
      width: corners.ne.x - corners.nw.x,
      height: corners.se.y - corners.ne.y
    });
  }, [corners]);

  const handleMouseDown = (e: React.MouseEvent, handle: string) => {
    e.stopPropagation();
    isDragging.current = true;
    dragHandle.current = handle;
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging.current) return;

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
      isDragging.current = false;
      dragHandle.current = null;
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  return (
    <VersatileDiv
      style={{
        position: 'fixed',
        left: corners.nw.x,
        top: corners.nw.y,
        width: size.width,
        height: size.height
      }}
    >

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
      <BigCenterHandle
        style={{
          position: 'fixed',
          left: corners.center.x - (size.width * 0.8) / 2,
          top: corners.center.y - (size.height * 0.8) / 2,
          width: size.width * 0.8,
          height: size.height * 0.8
        }}
      />
    </VersatileDiv>
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
  z-index: 3;
`;

const BigCenterHandle = styled.div`
  background-color: #FE9135;
  z-index: 2;
`;

const VersatileDiv = styled.div`
  position: relative;
  background-color: beige;
  z-index: 1;
`;

export default VersatileComp;