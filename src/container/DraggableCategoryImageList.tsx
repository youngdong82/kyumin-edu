import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useStore } from "../shared/selectedCategory";
import { ImageData } from "../shared/types";
import b1 from "../asset/test/building/옥우1.png";
import b2 from "../asset/test/building/옥우2.png";
import b3 from "../asset/test/building/옥우3.png";
import b4 from "../asset/test/building/옥우4.png";
import b5 from "../asset/test/building/옥우5.png";
import b6 from "../asset/test/building/옥우6.png";
import b7 from "../asset/test/building/옥우7.png";
import b8 from "../asset/test/building/옥우8.png";
import b9 from "../asset/test/building/옥우9.png";
import b10 from "../asset/test/building/옥우10.png";
import b11 from "../asset/test/building/옥우11.png";
import b12 from "../asset/test/building/옥우12.png";
import b13 from "../asset/test/building/옥우13.png";
import b14 from "../asset/test/building/옥우14.png";
import b15 from "../asset/test/building/옥우15.png";
import b16 from "../asset/test/building/옥우16.png";
import b17 from "../asset/test/building/옥우17.png";
import b18 from "../asset/test/building/옥우18.png";
import b19 from "../asset/test/building/옥우19.png";
import b20 from "../asset/test/building/옥우20.png";

import p1 from "../asset/test/people/인물1.png";
import p2 from "../asset/test/people/인물2.png";
import p3 from "../asset/test/people/인물3.png";
import p4 from "../asset/test/people/인물4.png";
import p5 from "../asset/test/people/인물5.png";
import p6 from "../asset/test/people/인물6.png";
import p7 from "../asset/test/people/인물7.png";
import p8 from "../asset/test/people/인물8.png";
import p9 from "../asset/test/people/인물9.png";
import p10 from "../asset/test/people/인물10.png";
import p11 from "../asset/test/people/인물11.png";
import p12 from "../asset/test/people/인물12.png";
import p13 from "../asset/test/people/인물13.png";
import p14 from "../asset/test/people/인물14.png";
import p15 from "../asset/test/people/인물15.png";
import p16 from "../asset/test/people/인물16.png";
import p17 from "../asset/test/people/인물17.png";
import p18 from "../asset/test/people/인물18.png";
import p19 from "../asset/test/people/인물19.png";
import p20 from "../asset/test/people/인물20.png";
import p21 from "../asset/test/people/인물21.png";
import p22 from "../asset/test/people/인물22.png";
import p23 from "../asset/test/people/인물23.png";
import p24 from "../asset/test/people/인물24.png";
import p25 from "../asset/test/people/인물25.png";
import p26 from "../asset/test/people/인물26.png";
import p27 from "../asset/test/people/인물27.png";
import p28 from "../asset/test/people/인물28.png";
import p29 from "../asset/test/people/인물29.png";
import p30 from "../asset/test/people/인물30.png";


const MAX_IMAGE_SIZE = 100;

const DraggableCategoryImageList: React.FC = () => {
  const { selectedCategory } = useStore();
  const [images, setImages] = useState<ImageData[]>([]);

  useEffect(() => {
    const buildings = [
      { id: "b_1", imageUrl: b1, width: 0, height: 0 },
      { id: "b_2", imageUrl: b2, width: 0, height: 0 },
      { id: "b_3", imageUrl: b3, width: 0, height: 0 },
      { id: "b_4", imageUrl: b4, width: 0, height: 0 },
      { id: "b_5", imageUrl: b5, width: 0, height: 0 },
      { id: "b_6", imageUrl: b6, width: 0, height: 0 },
      { id: "b_7", imageUrl: b7, width: 0, height: 0 },
      { id: "b_8", imageUrl: b8, width: 0, height: 0 },
      { id: "b_9", imageUrl: b9, width: 0, height: 0 },
      { id: "b_10", imageUrl: b10, width: 0, height: 0 },
      { id: "b_11", imageUrl: b11, width: 0, height: 0 },
      { id: "b_12", imageUrl: b12, width: 0, height: 0 },
      { id: "b_13", imageUrl: b13, width: 0, height: 0 },
      { id: "b_14", imageUrl: b14, width: 0, height: 0 },
      { id: "b_15", imageUrl: b15, width: 0, height: 0 },
      { id: "b_16", imageUrl: b16, width: 0, height: 0 },
      { id: "b_17", imageUrl: b17, width: 0, height: 0 },
      { id: "b_18", imageUrl: b18, width: 0, height: 0 },
      { id: "b_19", imageUrl: b19, width: 0, height: 0 },
      { id: "b_20", imageUrl: b20, width: 0, height: 0 },
    ];
    const peoples = [
      { id: "p_1", imageUrl: p1, width: 0, height: 0 },
      { id: "p_2", imageUrl: p2, width: 0, height: 0 },
      { id: "p_3", imageUrl: p3, width: 0, height: 0 },
      { id: "p_4", imageUrl: p4, width: 0, height: 0 },
      { id: "p_5", imageUrl: p5, width: 0, height: 0 },
      { id: "p_6", imageUrl: p6, width: 0, height: 0 },
      { id: "p_7", imageUrl: p7, width: 0, height: 0 },
      { id: "p_8", imageUrl: p8, width: 0, height: 0 },
      { id: "p_9", imageUrl: p9, width: 0, height: 0 },
      { id: "p_10", imageUrl: p10, width: 0, height: 0 },
      { id: "p_11", imageUrl: p11, width: 0, height: 0 },
      { id: "p_12", imageUrl: p12, width: 0, height: 0 },
      { id: "p_13", imageUrl: p13, width: 0, height: 0 },
      { id: "p_14", imageUrl: p14, width: 0, height: 0 },
      { id: "p_15", imageUrl: p15, width: 0, height: 0 },
      { id: "p_16", imageUrl: p16, width: 0, height: 0 },
      { id: "p_17", imageUrl: p17, width: 0, height: 0 },
      { id: "p_18", imageUrl: p18, width: 0, height: 0 },
      { id: "p_19", imageUrl: p19, width: 0, height: 0 },
      { id: "p_20", imageUrl: p20, width: 0, height: 0 },
      { id: "p_21", imageUrl: p21, width: 0, height: 0 },
      { id: "p_22", imageUrl: p22, width: 0, height: 0 },
      { id: "p_23", imageUrl: p23, width: 0, height: 0 },
      { id: "p_24", imageUrl: p24, width: 0, height: 0 },
      { id: "p_25", imageUrl: p25, width: 0, height: 0 },
      { id: "p_26", imageUrl: p26, width: 0, height: 0 },
      { id: "p_27", imageUrl: p27, width: 0, height: 0 },
      { id: "p_28", imageUrl: p28, width: 0, height: 0 },
      { id: "p_29", imageUrl: p29, width: 0, height: 0 },
      { id: "p_30", imageUrl: p30, width: 0, height: 0 },
    ];

    const imagesToLoad = selectedCategory === "Buildings" ? buildings : peoples;

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
