import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import VersatileComp from './draggable/VersatileComp';
import { VersatileImage } from './shared/TypeRepository';
import { flipImage } from './shared/flipImage';
import LeftImageContainer from './container/LeftImageContainer';
import { ImageData } from './shared/types';
import { useVersatileContainerStore } from './shared/versatileContainerStore';
import 동물1 from './asset/test/animal/동물1.png'
import 동물2 from './asset/test/animal/동물2.png'
import 동물3 from './asset/test/animal/동물3.png'
import Hanji from './asset/background.jpg';

export default function App() {
  const {
    selectedVersatile,
    setSelectedVersatile,
    versatileContainer,
    setVersatileContainer
  } = useVersatileContainerStore();
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);

  const handleSelect = (e: React.MouseEvent, id: number) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedVersatile(versatileContainer.find((each) => each.id === id) || null);
  }

  const releseSelect = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setSelectedVersatile(null);
    }
  }

  const toggleFix = () => {
    if (selectedVersatile !== null) {
      const newContainer = versatileContainer.map((each) =>
        each.id === selectedVersatile.id ? { ...each, isFixed: !each.isFixed } : each
      );
      setVersatileContainer(newContainer);
      setSelectedVersatile({ ...selectedVersatile, isFixed: !selectedVersatile.isFixed });
    }
  }

  const handleDelete = () => {
    if (selectedVersatile !== null) {
      setVersatileContainer(versatileContainer.filter((each) => each.id !== selectedVersatile.id));
      setSelectedVersatile(null);
    }
  };

  const handleRotateLeft = () => {
    if (selectedVersatile !== null && !selectedVersatile.isFixed) {
      setVersatileContainer(versatileContainer.map((each) => each.id === selectedVersatile.id ? { ...each, rotateState: each.rotateState - 1 } : each));
    }
  }

  const handleRotateRight = () => {
    if (selectedVersatile !== null && !selectedVersatile.isFixed) {
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

  const flipHorizontal = async () => {
    if (selectedVersatile !== null && !selectedVersatile.isFixed) {
      const newImageSrc = await flipImage(selectedVersatile.imageSrc, 'horizontal');
      setVersatileContainer(versatileContainer.map((each) => each.id === selectedVersatile.id ? {
        ...each,
        imageSrc: newImageSrc
      } : each));
      setSelectedVersatile({ ...selectedVersatile, imageSrc: newImageSrc || selectedVersatile.imageSrc });
    }
  }
  const flipVertical = async () => {
    if (selectedVersatile !== null && !selectedVersatile.isFixed) {
      const newImageSrc = await flipImage(selectedVersatile.imageSrc, 'vertical');
      setVersatileContainer(versatileContainer.map((each) => each.id === selectedVersatile.id ? {
        ...each,
        imageSrc: newImageSrc
      } : each));
      setSelectedVersatile({ ...selectedVersatile, imageSrc: newImageSrc || selectedVersatile.imageSrc });
    }
  }

  const handleImageAdd = (imageData: Omit<ImageData, "id">) => {
    const newId = versatileContainer.length > 0
      ? Math.max(...versatileContainer.map(img => img.id)) + 1
      : 1;

    const newVersatileImage: VersatileImage = {
      id: newId,
      dropPosition: { x: 400, y: 300 },
      initialSize: { width: imageData.width, height: imageData.height },
      ratio: imageData.width / imageData.height,
      imageSrc: imageData.imageUrl,
      rotateState: 0,
      zIndex: versatileContainer.length + 1,
      isFixed: false,
    };

    setVersatileContainer([...versatileContainer, newVersatileImage]);
    setUploadedImages([...uploadedImages, imageData.imageUrl]);
  };


  return (
    <Main>
      <Title>HWANG KYU MIN</Title>
      <LeftImageContainer onImageAdd={handleImageAdd} />
      <VersatileContainer
        $backgroundImage={Hanji}
        onClick={releseSelect}
      >
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
            <ControlButton onClick={toggleFix} data-resize-handle>
              {selectedVersatile.isFixed ? "Free" : "Fix"}
            </ControlButton>
            <ControlButton onClick={handleDelete} data-resize-handle>
              X
            </ControlButton>
          </ControlButtonBox>
          <ControlButtonBox>
            <ControlButton>depth:{selectedVersatile.zIndex}</ControlButton>
            <ControlButton onClick={increaseZIndex}>+</ControlButton>
            <ControlButton onClick={decreaseZIndex}>-</ControlButton>
          </ControlButtonBox>
          <ControlButtonBox>
            <ControlButton onClick={handleRotateLeft} data-resize-handle>
              ↺
            </ControlButton>
            <ControlButton onClick={handleRotateRight} data-resize-handle>
              ↻
            </ControlButton>
            <ControlButton onClick={flipHorizontal} data-resize-handle>
              ⇄
            </ControlButton>
            <ControlButton onClick={flipVertical} data-resize-handle>
              ⇅
            </ControlButton>
          </ControlButtonBox>
        </ButtonGroup>
      )}
    </Main >
  );
}

const Main = styled.main`
  position: relative;
  width: 100vw;
  height: 100vh;
  margin: 0 auto;
  background-color: #f0f0f0;

  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 40px;

  width: 100%;
  display: flex;
  // justify-content: center;
  align-items: center;

  padding: 10px 20px;
`;

const VersatileContainer = styled.div<{ $backgroundImage: string }>`
  position: relative;
  width: 90vw;
  height: 80vh;
  background-image: 
    // linear-gradient(rgba(183, 183, 183, 0.3), rgba(107, 107, 107, 0.3)),
    url(${({ $backgroundImage }) => $backgroundImage});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const ButtonGroup = styled.div`
  width: 100%;
  position: absolute;
  bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
