import React, { useEffect, useState } from "react";
import styled from "styled-components";
import VersatileComp from './draggable/VersatileComp';
import 동물1 from './asset/test/animal/동물1.png'
import 동물2 from './asset/test/animal/동물2.png'
import 동물3 from './asset/test/animal/동물3.png'
import { VersatileImage } from './shared/TypeRepository';


export default function App() {
  const [selectedVersatile, setSelectedVersatile] = useState<VersatileImage | null>(null);
  const [versatileContainer, setVersatileContainer] = useState<VersatileImage[]>(
    []
  );

  const handleSelect = (id: number) => {
    setSelectedVersatile(versatileContainer.find((each) => each.id === id) || null);
  }

  useEffect(() => {
    setVersatileContainer([{
      id: 1,
      dropPosition: { x: 400, y: 100 },
      initialSize: { width: 200, height: 100 },
      imageSrc: 동물1,
      rotateState: 0,
      zIndex: 1
    },
    {
      id: 2,
      dropPosition: { x: 200, y: 600 },
      initialSize: { width: 100, height: 300 },
      imageSrc: 동물2,
      rotateState: 0,
      zIndex: 2
    }]);
  }, []);

  const handleDelete = () => {
    if (selectedVersatile !== null) {
      setVersatileContainer(versatileContainer.filter((each) => each.id !== selectedVersatile.id));
      setSelectedVersatile(null);
    }
  };

  const handleRotateLeft = () => {
    if (selectedVersatile !== null) {
      setVersatileContainer(versatileContainer.map((each) => each.id === selectedVersatile.id ? { ...each, rotateState: each.rotateState - 1 } : each));
    }
  }

  const handleRotateRight = () => {
    if (selectedVersatile !== null) {
      setVersatileContainer(versatileContainer.map((each) => each.id === selectedVersatile.id ? { ...each, rotateState: each.rotateState + 1 } : each));
    }
  }

  const increaseZIndex = () => {
    if (selectedVersatile !== null) {
      const newContainer = versatileContainer.map((each) =>
        each.id === selectedVersatile.id ? { ...each, zIndex: each.zIndex + 1 } : each
      );
      setVersatileContainer(newContainer);
      setSelectedVersatile({ ...selectedVersatile, zIndex: selectedVersatile.zIndex + 1 });
    }
  }

  const decreaseZIndex = () => {
    if (selectedVersatile !== null) {
      const newContainer = versatileContainer.map((each) =>
        each.id === selectedVersatile.id ? { ...each, zIndex: each.zIndex - 1 } : each
      );
      setVersatileContainer(newContainer);
      setSelectedVersatile({ ...selectedVersatile, zIndex: selectedVersatile.zIndex - 1 });
    }
  }

  return (
    <Main>
      <VersatileContainer>
        {versatileContainer.map((each) => (
          <VersatileComp
            key={each.id}
            data={each}
            isSelected={selectedVersatile?.id === each.id}
            onSelect={handleSelect}
          />
        ))}
      </VersatileContainer>
      {selectedVersatile && (
        <ButtonGroup>
          <ControlButtonBox>
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
          <ControlButtonBox>
            <ControlButton>depth:{selectedVersatile.zIndex}</ControlButton>
            <ControlButton onClick={increaseZIndex}>+</ControlButton>
            <ControlButton onClick={decreaseZIndex}>-</ControlButton>
          </ControlButtonBox>
        </ButtonGroup>
      )}
    </Main>
  );
}

const Main = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #f0f0f0;
`;

const VersatileContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
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
