import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VersatileComp from './draggable/VersatileComp';


export default function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [versatileContainer, setVersatileContainer] = useState<{
    id: number;
    dropPosition: { x: number, y: number };
    initialSize: { width: number, height: number };
  }[]>(
    []
  );

  const handleSelect = (id: number) => {
    setSelectedId(id);
  }

  useEffect(() => {
    setVersatileContainer([{
      id: 1,
      dropPosition: { x: 400, y: 100 },
      initialSize: { width: 200, height: 100 }
    },
    {
      id: 2,
      dropPosition: { x: 200, y: 600 },
      initialSize: { width: 100, height: 300 }
    }]);
  }, []);

  const handleDelete = () => {
    if (selectedId !== null) {
      setVersatileContainer(versatileContainer.filter((each) => each.id !== selectedId));
      setSelectedId(null);
    }
  };

  return (
    <Main>
      {versatileContainer.map((item) => (
        <VersatileComp
          key={item.id}
          id={item.id}
          isSelected={selectedId === item.id}
          onSelect={handleSelect}
          dropPosition={item.dropPosition}
          initialSize={item.initialSize}
        />
      ))}
      <ButtonGroup>
        <ControlButtonBox>
          {/* <ControlButton onClick={toggleFix} data-resize-handle>
            {isFixed ? "Free" : "Fix"}
          </ControlButton>
          <ControlButton onClick={adjustRatio} data-resize-handle>
            Ratio
          </ControlButton>
          <ControlButton onClick={flipHorizontal} data-resize-handle>
            ⇄
          </ControlButton> */}
          <ControlButton onClick={handleDelete} data-resize-handle>
            X
          </ControlButton>
          {/* <ControlButton onClick={(e) => handleRotateLeft(e)} data-resize-handle>
            ↺
          </ControlButton>
          <ControlButton onClick={(e) => handleRotateRight(e)} data-resize-handle>
            ↻
          </ControlButton> */}
        </ControlButtonBox>
        {/* <ControlButtonBox>
          <ControlButton>depth:{zIndex}
          </ControlButton>
          <ControlButton onClick={increaseZIndex}>+</ControlButton>
          <ControlButton onClick={decreaseZIndex}>-</ControlButton>
        </ControlButtonBox> */}
      </ButtonGroup>
    </Main >
  );
}

const Main = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #f0f0f0;
`;


const ButtonGroup = styled.div`
  width: 100%;
  position: absolute;
  bottom: 100px;
  display: flex;
  justify-content: center;
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
