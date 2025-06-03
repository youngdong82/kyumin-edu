import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VersatileComp from './draggable/VersatileComp';
import 동물1 from './asset/test/animal/동물1.png'
import 동물2 from './asset/test/animal/동물2.png'
import 동물3 from './asset/test/animal/동물3.png'


export default function App() {
  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [versatileContainer, setVersatileContainer] = useState<{
    id: number;
    dropPosition: { x: number, y: number };
    initialSize: { width: number, height: number };
    image: string;
    rotateState: number;
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
      initialSize: { width: 200, height: 100 },
      image: 동물1,
      rotateState: 0
    },
    {
      id: 2,
      dropPosition: { x: 200, y: 600 },
      initialSize: { width: 100, height: 300 },
      image: 동물2,
      rotateState: 0
    }]);
  }, []);

  const handleDelete = () => {
    if (selectedId !== null) {
      setVersatileContainer(versatileContainer.filter((each) => each.id !== selectedId));
      setSelectedId(null);
    }
  };

  const handleRotateLeft = () => {
    if (selectedId !== null) {
      setVersatileContainer(versatileContainer.map((each) => each.id === selectedId ? { ...each, rotateState: each.rotateState - 1 } : each));
    }
  }

  const handleRotateRight = () => {
    if (selectedId !== null) {
      setVersatileContainer(versatileContainer.map((each) => each.id === selectedId ? { ...each, rotateState: each.rotateState + 1 } : each));
    }
  }

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
          imageSrc={item.image}
          rotateState={item.rotateState}
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
          <ControlButton onClick={handleRotateLeft} data-resize-handle>
            ↺
          </ControlButton>
          <ControlButton onClick={handleRotateRight} data-resize-handle>
            ↻
          </ControlButton>
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
