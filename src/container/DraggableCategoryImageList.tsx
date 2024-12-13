import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStore } from "../shared/selectedCategory";
import { ImageData } from "../shared/types";

import { treeImages } from '../importImage/importTree';
import { rockImages } from '../importImage/importRock';
import { insectImages } from '../importImage/importInsect';
import { animalImages } from '../importImage/importAnimal';
import { birdImages } from '../importImage/importBird';
import { peopleImages } from '../importImage/importPeople';
import { buildingImages } from '../importImage/importBuilding';
import { otherImages } from '../importImage/importOther';
import { juknanImages } from '../importImage/importJuknan';
import { mekukImages } from '../importImage/importMekuk';
import { figureImages } from '../importImage/importFigure';
import { fishImages } from '../importImage/importFish';


const MAX_IMAGE_SIZE = 100;


const DraggableCategoryImageList: React.FC = () => {
  const { selectedCategory } = useStore();
  const [images, setImages] = useState<ImageData[]>([]);
  const makeImagesToLoad = () => {
    switch (selectedCategory) {
      case "Buildings":
        return buildingImages;  //완
      case "People":
        return peopleImages;  //완
      case "Animal":
        return animalImages;  //완
      case "Bird":
        return birdImages;  //완
      case "Insect":
        return insectImages;  //완
      case "Juknan":
        return juknanImages;  //완
      case "Mekuk":
        return mekukImages;
      case "Tree":
        return treeImages;  //완
      case "Rock":
        return rockImages;  //완
      case "Fish":
        return fishImages;  //완
      case "Figure":
        return figureImages;  //완
      default:
        return otherImages;  //완
    }
  };

  useEffect(() => {
    const imagesToLoad = makeImagesToLoad();

    const loadImages = async () => {
      const updatedImages = await Promise.all(
        imagesToLoad.map(async (image) => {
          const img = await loadImage(image.imageUrl);
          let width, height;
          const aspectRatio = img.width / img.height;
          if (img.width > img.height) {
            width = Math.min(img.width, MAX_IMAGE_SIZE);
            height = width / aspectRatio;
          } else {
            height = Math.min(img.height, MAX_IMAGE_SIZE);
            width = height * aspectRatio;
          }
          return {
            ...image,
            width,
            height,
          };
        }),
      );

      setImages(updatedImages);
    };
    loadImages();
  }, [selectedCategory]);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    imageData: ImageData,
  ) => {
    e.dataTransfer.setData("application/json", JSON.stringify(imageData));
    e.dataTransfer.effectAllowed = "copy";
  };

  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src; // Directly using the image URL
    });
  };

  return (
    <Container>
      <ImageList>
        {images.map((image) => (
          <ImageContainer
            key={image.id}
            $isDraggable={true}
            draggable={true}
            onDragStart={(e) => handleDragStart(e, image)}
            $aspectRatio={image.width / image.height}
          >
            <img src={image.imageUrl} alt={`Image ${image.id}`} />
          </ImageContainer>
        ))}
      </ImageList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ImageList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem;
  max-height: 300px; /* 최대 높이를 300px로 설정 */
  overflow-y: auto; /* 세로 스크롤 활성화 */
  overflow-x: hidden; /* 가로 스크롤 제거 */
`;

interface ImageContainerProps {
  $isDraggable?: boolean;
  $aspectRatio: number;
}

const ImageContainer = styled.div<ImageContainerProps>`
  border: 1px solid #e5e7eb;
  cursor: ${(props) => (props.$isDraggable ? "move" : "default")};
  flex: 0 0 auto;
  width: ${(props) => props.$aspectRatio * MAX_IMAGE_SIZE}px;
  height: ${MAX_IMAGE_SIZE}px;

  img {
    display: block;
    width: 100%;
    height: auto;
    object-fit: contain;
  }
`;

export default DraggableCategoryImageList;
