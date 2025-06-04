import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStore } from "../shared/selectedCategory";
import { useVersatileContainerStore } from '../shared/versatileContainerStore';
import { ImageData } from "../shared/types";

import { treeImages } from '../importImage/importTree';
import { rockImages } from '../importImage/importRock';
import { insectImages } from '../importImage/importInsect';
import { animalImages } from '../importImage/importAnimal';
import { birdImages } from '../importImage/importBird';
import { peopleImages } from '../importImage/importPeople';
import { buildingImages } from '../importImage/importBuilding';
import { otherImages } from '../importImage/importOther';
import { plantImages } from '../importImage/importPlant';
import { figureImages } from '../importImage/importFigure';
import { fishImages } from '../importImage/importFish';
import { VersatileImage } from '../shared/TypeRepository';


const MAX_IMAGE_SIZE = 100;

const DROP_RANGE = {
  x: { min: 200, max: 1800 },
  y: { min: 300, max: 800 }
};

const SCALE = 2;

const CategoryImageList: React.FC = () => {
  const { selectedCategory } = useStore();
  const { setSelectedVersatile, versatileContainer, setVersatileContainer } = useVersatileContainerStore();
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
      case "Plant":
        return plantImages;  //완
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


  const loadImage = (src: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src; // Directly using the image URL
    });
  };

  const getRandomPosition = () => {
    const randomX = Math.floor(Math.random() * (DROP_RANGE.x.max - DROP_RANGE.x.min) + DROP_RANGE.x.min);
    const randomY = Math.floor(Math.random() * (DROP_RANGE.y.max - DROP_RANGE.y.min) + DROP_RANGE.y.min);
    return { x: randomX, y: randomY };
  };

  const handleImageClick = (image: ImageData) => {
    const newVersatileImage: VersatileImage = {
      id: versatileContainer.length + 1,
      dropPosition: getRandomPosition(),
      initialSize: { width: image.width * SCALE, height: image.height * SCALE },
      ratio: image.width / image.height,
      imageSrc: image.imageUrl,
      rotateState: 0,
      zIndex: versatileContainer.length + 1,
      isFixed: false
    };
    setSelectedVersatile(newVersatileImage);
    setVersatileContainer([...versatileContainer, newVersatileImage]);
  };

  return (
    <Container>
      <ImageList>
        {images.map((image) => (
          <ImageDiv
            key={image.id}
            $aspectRatio={image.width / image.height}
            onClick={() => handleImageClick(image)}
          >
            <img src={image.imageUrl} alt={`Image ${image.id}`} />
          </ImageDiv>
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
  width: 100%;
  height: 90vh;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  align-items: flex-start;
  padding: 1rem;
  overflow-x: hidden; /* 가로 스크롤 제거 */
  overflow-y: auto; /* 세로 스크롤 활성화 */
  &::-webkit-scrollbar { width: 5px; }
  &::-webkit-scrollbar-track { background: transparent; }
  &::-webkit-scrollbar-thumb { background: #bfbfbf; border-radius: 1px; }
`;

interface ImageContainerProps {
  $isDraggable?: boolean;
  $aspectRatio: number;
}

const ImageDiv = styled.div<ImageContainerProps>`
  border: 1px solid #e5e7eb;
  cursor: pointer;
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

export default CategoryImageList;
