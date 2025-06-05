import React, { useRef, useState } from "react";
import styled from "styled-components";
import VersatileComp from './draggable/VersatileComp';
import { RatioKey, VersatileImage } from './shared/TypeRepository';
import LeftImageContainer from './container/LeftImageContainer';
import { ImageData } from './shared/types';
import { useVersatileContainerStore } from './shared/versatileContainerStore';
import Hanji1 from './asset/background.jpg';
import Hanji2 from './asset/background2.jpg';
import FloatingBtnContainer from './container/FloatingBtnContainer';
import { handleDownload } from './shared/downloadImage';

export default function App() {
  const {
    selectedVersatile,
    setSelectedVersatile,
    versatileContainer,
    setVersatileContainer
  } = useVersatileContainerStore();
  const [ratio, setRatio] = useState<RatioKey>("wide-16-9");
  const [uploadedImages, setUploadedImages] = useState<string[]>([]);
  const playgroundSheetRef = useRef<HTMLDivElement>(null);

  const ratioOptions: Record<RatioKey, { label: string; ratio: number }> = {
    "wide-16-9": { label: "16:9", ratio: 16 / 9 },
    "wide-3-2": { label: "3:2", ratio: 3 / 2 },
    "wide-4-3": { label: "4:3", ratio: 4 / 3 },
    "square-1-1": { label: "1:1", ratio: 1 / 1 },
    "tall-9-16": { label: "9:16", ratio: 9 / 16 },
    "tall-2-3": { label: "2:3", ratio: 2 / 3 },
    "tall-3-4": { label: "3:4", ratio: 3 / 4 },
  };

  const groupedRatios = {
    wide: ["wide-16-9", "wide-3-2", "wide-4-3"] as RatioKey[],
    square: ["square-1-1"] as RatioKey[],
    tall: ["tall-9-16", "tall-2-3", "tall-3-4"] as RatioKey[],
  };

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
      <Header>
        {/* <Title>황규민  * トキドキ Transition</Title> */}
        <Title>HWANG KYU MIN  x トキドキ Transition</Title>
        {/* <Title>HWANG KYU MIN  <br /> x <br /> トキドキ Transition</Title> */}
        <RatioSection>
          {groupedRatios.wide.map((ratioKey) => (
            <RatioButton
              key={ratioKey}
              $isSelected={ratio === ratioKey}
              onClick={() => setRatio(ratioKey)}
            >
              {ratioOptions[ratioKey].label}
            </RatioButton>
          ))}
          {groupedRatios.square.map((ratioKey) => (
            <RatioButton
              key={ratioKey}
              $isSelected={ratio === ratioKey}
              onClick={() => setRatio(ratioKey)}
            >
              {ratioOptions[ratioKey].label}
            </RatioButton>
          ))}
          {groupedRatios.tall.map((ratioKey) => (
            <RatioButton
              key={ratioKey}
              $isSelected={ratio === ratioKey}
              onClick={() => setRatio(ratioKey)}
            >
              {ratioOptions[ratioKey].label}
            </RatioButton>
          ))}
        </RatioSection>
      </Header>
      <LeftImageContainer onImageAdd={handleImageAdd} />

      <VersatileContainer
        ref={playgroundSheetRef}
        $backgroundImage1={Hanji1}
        $backgroundImage2={Hanji2}
        $ratio={ratioOptions[ratio].ratio}
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
      <BtnContainer>
        <Btn onClick={() => handleDownload(playgroundSheetRef)}>Download</Btn>
      </BtnContainer>
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
  align-items: center;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;

  margin-bottom: 20px;
`;

const Title = styled.h1`
  font-size: 30px;

  width: 100%;
  display: flex;
  align-items: center;

  padding: 10px 20px;
`;

const VersatileContainer = styled.div<{
  $backgroundImage1: string,
  $backgroundImage2: string,
  $ratio: number
}>`
  position: relative;
  width: auto;
  height: ${({ $ratio }) => {
    switch ($ratio) {
      case 1:
        return 90 + "vh";
      default:
        return $ratio > 1 ? 90 + "vh" : 90 + "vh";
    }
  }};;
  aspect-ratio: ${({ $ratio }) => $ratio};
  background-image: 
    url(${({ $ratio, $backgroundImage1, $backgroundImage2 }) => $ratio > 1 ? $backgroundImage1 : $backgroundImage2});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const BtnContainer = styled.div`
  width: 100%;
  height: 10vh;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  
  padding: 10px 20px;
`;


const Btn = styled.button`
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: 1px solid #b8b8b8;
  &:hover {
    transform: scale(1.05);
  }
  transition: all 0.2s ease;
`;

const RatioSection = styled.section`
  width: fit-content;
  display: flex;
  gap: 6px;
  padding: 0 20px;
  margin-top: 15px;
`;

const RatioButton = styled.button<{ $isSelected: boolean }>`
  height: 28px;
  padding: 4px 12px;
  font-size: 12px;
  border: 1px solid gray;
  
  background-color: ${({ $isSelected }) => ($isSelected ? "rgb(44, 34, 25)" : "rgb(231, 231, 231)")};
  color: ${({ $isSelected }) => ($isSelected ? "white" : "black")};
  
  &:hover {
    transform: scale(1.05);
  }
  transition: all 0.2s ease;
`;