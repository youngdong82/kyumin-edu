import React, { useState } from 'react';
import styled from 'styled-components';
import { useStore } from '../shared/selectedCategory';
import ImageListComp from './ImageList';
import { ImageData } from '../shared/types';
import CategoryImageList from './CategoryImageList';


interface LeftNavBarProps {
  onImageAdd: (imageData: Omit<ImageData, "id">) => void;
}

const LeftNavBar: React.FC<LeftNavBarProps> = ({ onImageAdd }) => {
  const [isHovered, setIsHovered] = useState(false);
  const { selectedCategory, setSelectedCategory } = useStore();
  const [uploadedImages, setUploadedImages] = useState<ImageData[]>([]);


  return (
    <>
      <LnbSection
        $isHovered={isHovered}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <CategoryButtonGroup>
          <CategoryButton
            $isSelected={selectedCategory === "People"}
            onClick={() => setSelectedCategory("People")}
          >
            People
          </CategoryButton>
          <CategoryButton
            $isSelected={selectedCategory === "Buildings"}
            onClick={() => setSelectedCategory("Buildings")}
          >
            Buildings
          </CategoryButton>
          <CategoryButton
            $isSelected={selectedCategory === "Animal"}
            onClick={() => setSelectedCategory("Animal")}
          >
            Animal
          </CategoryButton>
          <CategoryButton
            $isSelected={selectedCategory === "Bird"}
            onClick={() => setSelectedCategory("Bird")}
          >
            Bird
          </CategoryButton>
          <CategoryButton
            $isSelected={selectedCategory === "Fish"}
            onClick={() => setSelectedCategory("Fish")}
          >
            Fish
          </CategoryButton>
          <CategoryButton
            $isSelected={selectedCategory === "Insect"}
            onClick={() => setSelectedCategory("Insect")}
          >
            Insect
          </CategoryButton>
          <CategoryButton
            $isSelected={selectedCategory === "Plant"}
            onClick={() => setSelectedCategory("Plant")}
          >
            Plant
          </CategoryButton>
          <CategoryButton
            $isSelected={selectedCategory === "Tree"}
            onClick={() => setSelectedCategory("Tree")}
          >
            Tree
          </CategoryButton>
          <CategoryButton
            $isSelected={selectedCategory === "Rock"}
            onClick={() => setSelectedCategory("Rock")}
          >
            Rock
          </CategoryButton>
          <CategoryButton
            $isSelected={selectedCategory === "Figure"}
            onClick={() => setSelectedCategory("Figure")}
          >
            Figure
          </CategoryButton>
          <CategoryButton
            $isSelected={selectedCategory === "Others"}
            onClick={() => setSelectedCategory("Others")}
          >
            Others
          </CategoryButton>
        </CategoryButtonGroup>
        <CategoryImageList />
        {/* <ImageListComp images={uploadedImages} onImageAdd={() => { }} /> */}
        {/* <UploadImgBtn onImageAdd={onImageAdd} /> */}
      </LnbSection >
    </>
  )
}

const LnbSection = styled.section<{ $isHovered: boolean }>`
  position: absolute;
  left: 0px;
  width: ${({ $isHovered }) =>
    $isHovered
      ? '80vw'
      : '0.1vw'};
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  overflow: hidden;
  transition: width 0.8s ease-in-out;
  
  outline: none;
  border: 1px solid rgb(44, 34, 25);
  border-radius: 2px;
  backdrop-filter: blur(4px);
  background-color: rgb(196, 196, 196, 0.3);

  overflow-x: hidden;
  z-index: 9999;


`;

const LnbMenuContainer = styled.div<{ $isActive: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  pointer-events: ${({ $isActive }) => $isActive ? 'auto' : 'none'};
  opacity: ${({ $isActive }) => $isActive ? 1 : 0};
  transition: opacity 0.4s ease;
`;

const CategoryButtonGroup = styled.div`
  width: 100%;
  height: 6vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  padding: 0 1rem;
`;

const CategoryButton = styled.button<{ $isSelected: boolean }>`
  height: 32px;
  padding: 8px 16px;
  font-size: 14px;
  border: 1px solid gray;
  
  background-color: ${(props) => (props.$isSelected ? "rgb(44, 34, 25)" : "rgb(231, 231, 231)")};
  color: ${(props) => (props.$isSelected ? "white" : "black")};
  
  &:hover {
    transform: scale(1.05);
  }
  transition: all 0.2s ease;
`;

export default LeftNavBar;