import React, { useState, useEffect, useRef, useCallback } from "react";
import styled from "styled-components";

const GRID_SIZE = 5; // Size of each grid cell in pixels

interface DraggableResizableDivProps {
  $isSelected: boolean;
  onSelect: () => void;
  parentSize: { width: number; height: number };
  $backgroundImage: string;
  initialSize: { width: number; height: number };
  initialPosition: { x: number; y: number };
  onDelete: () => void;
}

const DraggableResizableDiv: React.FC<DraggableResizableDivProps> = ({
  $isSelected,
  onSelect,
  parentSize,
  $backgroundImage,
  initialSize,
  initialPosition,
  onDelete,
}) => {
  const [position, setPosition] = useState(initialPosition);
  const [size, setSize] = useState(initialSize);
  const [rotation, setRotation] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [isFlippedX, setIsFlippedX] = useState(false);
  const [zIndex, setZIndex] = useState(1);
  const divRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const isResizing = useRef(false);
  const resizeDirection = useRef<string | null>(null);
  const lastPosition = useRef({ x: 0, y: 0 });
  const initialAspectRatio = useRef(initialSize.width / initialSize.height);

  useEffect(() => {
    initialAspectRatio.current = initialSize.width / initialSize.height;
  }, [initialSize]);

  const increaseZIndex = () => setZIndex((prev) => prev + 1);
  const decreaseZIndex = () => setZIndex((prev) => Math.max(1, prev - 1));

  const getTransformedSize = (
    width: number,
    height: number,
    rotation: number,
  ) => {
    console.log("rotation: ", rotation);
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    console.log("normalizedRotation: ", normalizedRotation);
    if (normalizedRotation === 90 || normalizedRotation === 270) {
      console.log("width & height");
      return { width: height, height: width };
    }
    return { width, height };
  };

  const getTransformedPosition = (
    x: number,
    y: number,
    width: number,
    height: number,
    rotation: number,
  ) => {
    const normalizedRotation = ((rotation % 360) + 360) % 360;
    switch (normalizedRotation) {
      case 90:
        return { x: x + width / 2 - height / 2, y: y - width / 2 + height / 2 };
      case 180:
        return { x, y };
      case 270:
        return { x: x - width / 2 + height / 2, y: y + width / 2 - height / 2 };
      default:
        return { x, y };
    }
  };

  const transformedSize = getTransformedSize(size.width, size.height, rotation);
  const transformedPosition = getTransformedPosition(
    position.x,
    position.y,
    size.width,
    size.height,
    rotation,
  );

  const handleMouseDown = useCallback(
    (e: React.MouseEvent, direction: string | null = null) => {
      e.stopPropagation();
      onSelect();
      if (direction) {
        isResizing.current = true;
        resizeDirection.current = direction;
      } else {
        isDragging.current = true;
      }
      lastPosition.current = { x: e.clientX, y: e.clientY };
    },
    [onSelect],
  );

  const snapToGrid = (value: number): number => {
    return Math.round(value / GRID_SIZE) * GRID_SIZE;
  };

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (isFixed) return;
      if (isDragging.current) {
        const dx = e.clientX - lastPosition.current.x;
        const dy = e.clientY - lastPosition.current.y;

        setPosition((prev) => {
          const newX = snapToGrid(prev.x + dx);
          const newY = snapToGrid(prev.y + dy);
          return {
            x: Math.max(0, Math.min(newX, parentSize.width - size.width)),
            y: Math.max(0, Math.min(newY, parentSize.height - size.height)),
          };
        });

        lastPosition.current = { x: e.clientX, y: e.clientY };
      } else if (isResizing.current) {
        const dx = e.clientX - lastPosition.current.x;
        const dy = e.clientY - lastPosition.current.y;

        let newWidth = size.width;
        let newHeight = size.height;
        let newX = position.x;
        let newY = position.y;

        if (resizeDirection.current?.includes("w")) {
          newWidth = Math.max(20, size.width - dx);
          newX = position.x + size.width - newWidth;
        } else if (resizeDirection.current?.includes("e")) {
          newWidth = Math.max(20, size.width + dx);
        }

        if (resizeDirection.current?.includes("n")) {
          newHeight = Math.max(20, size.height - dy);
          newY = position.y + size.height - newHeight;
        } else if (resizeDirection.current?.includes("s")) {
          newHeight = Math.max(20, size.height + dy);
        }

        if (e.shiftKey) {
          // Maintain aspect ratio
          if (
            resizeDirection.current === "n" ||
            resizeDirection.current === "s"
          ) {
            newWidth = newHeight * initialAspectRatio.current;
          } else if (
            resizeDirection.current === "w" ||
            resizeDirection.current === "e"
          ) {
            newHeight = newWidth / initialAspectRatio.current;
          } else {
            if (Math.abs(dx) > Math.abs(dy)) {
              newHeight = newWidth / initialAspectRatio.current;
            } else {
              newWidth = newHeight * initialAspectRatio.current;
            }
          }
        }

        // Snap resize to grid
        newWidth = snapToGrid(newWidth);
        newHeight = snapToGrid(newHeight);
        newX = snapToGrid(newX);
        newY = snapToGrid(newY);

        // Ensure the new size and position are within the parent boundaries
        if (
          newX >= 0 &&
          newY >= 0 &&
          newX + newWidth <= parentSize.width &&
          newY + newHeight <= parentSize.height
        ) {
          setSize({ width: newWidth, height: newHeight });
          setPosition({ x: newX, y: newY });
        }

        lastPosition.current = { x: e.clientX, y: e.clientY };
      }
    },
    [isFixed, parentSize, size, position],
  );

  const handleMouseUp = useCallback(() => {
    isDragging.current = false;
    isResizing.current = false;
    resizeDirection.current = null;
  }, []);

  const toggleFix = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFixed(!isFixed);
  };

  const adjustRatio = (e: React.MouseEvent) => {
    e.stopPropagation();
    const newHeight = snapToGrid(size.width / initialAspectRatio.current);
    if (position.y + newHeight <= parentSize.height) {
      setSize((prevSize) => ({ ...prevSize, height: newHeight }));
    } else {
      // If new height exceeds parent height, adjust width instead
      const maxHeight = snapToGrid(parentSize.height - position.y);
      const newWidth = snapToGrid(maxHeight * initialAspectRatio.current);
      setSize({ width: newWidth, height: maxHeight });
    }
  };

  // const rotateRight = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   setRotation((prev) => (prev + 90) % 360);
  // };

  const flipHorizontal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsFlippedX((prev) => !prev);
  };

  const deleteDiv = (e: React.MouseEvent) => {
    e.stopPropagation();
    onDelete();
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <Wrapper>
      {$isSelected && (
        <ButtonGroup
          style={{
            left: `${position.x + size.width / 2}px`,
            top: `${position.y - 64}px`,
            transform: "translateX(-50%)",
          }}
          data-draggable-div
        >
          <ControlButtonBox>
            <ControlButton onClick={toggleFix} data-resize-handle>
              {isFixed ? "Free" : "Fix"}
            </ControlButton>
            <ControlButton onClick={adjustRatio} data-resize-handle>
              Ratio
            </ControlButton>
            {/* <ControlButton onClick={rotateRight} data-resize-handle>
            ↻
          </ControlButton> */}
            <ControlButton onClick={flipHorizontal} data-resize-handle>
              ⇄
            </ControlButton>
            <ControlButton onClick={deleteDiv} data-resize-handle>
              X
            </ControlButton>
          </ControlButtonBox>
          <ControlButtonBox>
            <ControlButton>depth: {zIndex}</ControlButton>
            <ControlButton onClick={increaseZIndex}>+</ControlButton>
            <ControlButton onClick={decreaseZIndex}>-</ControlButton>
          </ControlButtonBox>
        </ButtonGroup>
      )}
      <StyledDiv
        ref={divRef}
        style={{
          left: `${transformedPosition.x}px`,
          top: `${transformedPosition.y}px`,
          width: `${transformedSize.width}px`,
          height: `${transformedSize.height}px`,
          zIndex: zIndex,
        }}
        onMouseDown={(e) => handleMouseDown(e)}
        $isSelected={$isSelected}
        $isFixed={isFixed}
        data-draggable-div
      >
        <ContentDiv
          style={{
            transform: `rotate(${rotation}deg) scaleX(${isFlippedX ? -1 : 1})`,
            //여기서 rotation이 90이나 270이라면

            width: `${transformedSize.width}px`,
            height: `${transformedSize.height}px`,
          }}
          $backgroundImage={$backgroundImage}
        />
        {$isSelected && !isFixed && (
          <>
            <ResizeHandle
              direction="n"
              onMouseDown={(e) => handleMouseDown(e, "n")}
              data-resize-handle
            />
            <ResizeHandle
              direction="s"
              onMouseDown={(e) => handleMouseDown(e, "s")}
              data-resize-handle
            />
            <ResizeHandle
              direction="w"
              onMouseDown={(e) => handleMouseDown(e, "w")}
              data-resize-handle
            />
            <ResizeHandle
              direction="e"
              onMouseDown={(e) => handleMouseDown(e, "e")}
              data-resize-handle
            />
            <ResizeHandle
              direction="nw"
              onMouseDown={(e) => handleMouseDown(e, "nw")}
              data-resize-handle
            />
            <ResizeHandle
              direction="ne"
              onMouseDown={(e) => handleMouseDown(e, "ne")}
              data-resize-handle
            />
            <ResizeHandle
              direction="sw"
              onMouseDown={(e) => handleMouseDown(e, "sw")}
              data-resize-handle
            />
            <ResizeHandle
              direction="se"
              onMouseDown={(e) => handleMouseDown(e, "se")}
              data-resize-handle
            />
          </>
        )}
      </StyledDiv>
    </Wrapper>
  );
};

export default DraggableResizableDiv;

const Wrapper = styled.div`
  position: relative;
  background-color: white;
`;

const StyledDiv = styled.div<{ $isSelected: boolean; $isFixed: boolean }>`
  position: absolute;
  background-color: transparent;
  border: ${(props) => (props.$isSelected ? "2px solid red" : "none")};
  cursor: ${(props) => (props.$isFixed ? "default" : "move")};
`;

const ContentDiv = styled.div<{ $backgroundImage: string }>`
  width: 100%;
  height: 100%;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: 100% 100%;
  background-position: center;
  transform-origin: center center;
`;

const ButtonGroup = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 100;
  white-space: nowrap;
`;

const ControlButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ControlButton = styled.button`
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: 1px solid #b8b8b8;
  cursor: pointer;

  &:hover {
    background-color: #b8b8b8;
  }
`;

const ResizeHandle = styled.div<{ direction: string }>`
  position: absolute;
  background-color: blue;
  ${(props) => {
    switch (props.direction) {
      case "n":
      case "s":
        return `
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 6px;
          cursor: ns-resize;
        `;
      case "w":
      case "e":
        return `
          top: 50%;
          transform: translateY(-50%);
          width: 6px;
          height: 20px;
          cursor: ew-resize;
        `;
      default:
        return `
          width: 6px;
          height: 6px;
        `;
    }
  }}
  ${(props) => {
    switch (props.direction) {
      case "n":
        return "top: -3px;";
      case "s":
        return "bottom: -3px;";
      case "w":
        return "left: -3px;";
      case "e":
        return "right: -3px;";
      case "nw":
        return "top: -3px; left: -3px; cursor: nw-resize;";
      case "ne":
        return "top: -3px; right: -3px; cursor: ne-resize;";
      case "sw":
        return "bottom: -3px; left: -3px; cursor: sw-resize;";
      case "se":
        return "bottom: -3px; right: -3px; cursor: se-resize;";
    }
  }}
`;
