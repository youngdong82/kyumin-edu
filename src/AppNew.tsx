import React, { useState } from "react";
import styled from "styled-components";
import VersatileComp from './draggable/VersatileComp';
import { VersatileImage } from './shared/TypeRepository';
import LeftImageContainer from './container/LeftImageContainer';
import { ImageData } from './shared/types';
import { useVersatileContainerStore } from './shared/versatileContainerStore';
import Hanji from './asset/background.jpg';
import FloatingBtnContainer from './container/FloatingBtnContainer';

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
      <FloatingBtnContainer />
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

