import React, { useRef } from "react";
import styled from "styled-components";
import { ImageData, DraggableImageListProps } from "../shared/types";

const MAX_IMAGE_SIZE = 100;

interface ImageListCompProps {
  images: ImageData[];
  onImageAdd: (imageData: Omit<ImageData, "id">) => void;
}

const ImageListComp: React.FC<ImageListCompProps> = ({
  images,
  onImageAdd,
}) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    imageData: ImageData,
  ) => {
    e.dataTransfer.setData("application/json", JSON.stringify(imageData));
    e.dataTransfer.effectAllowed = "copy";
  };

  const loadImage = (file: File): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      const fileExtension = file.name.split(".").pop()?.toLowerCase();
      const allowedExtensions = ["jpg", "jpeg", "png", "gif", "bmp", "webp"];

      if (allowedExtensions.includes(fileExtension || "")) {
        try {
          const img = await loadImage(file);
          const aspectRatio = img.width / img.height;

          let width, height;
          if (img.width > img.height) {
            width = Math.min(img.width, MAX_IMAGE_SIZE);
            height = width / aspectRatio;
          } else {
            height = Math.min(img.height, MAX_IMAGE_SIZE);
            width = height * aspectRatio;
          }

          const imageUrl = URL.createObjectURL(file);
          onImageAdd({ imageUrl, width, height });
        } catch (error) {
          console.error("Error loading image:", error);
          alert("There was an error loading the image. Please try again.");
        }
      } else {
        alert(
          "Please upload only image files (jpg, jpeg, png, gif, bmp, webp).",
        );
      }
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleCreateClick = () => {
    fileInputRef.current?.click();
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
  width: 100%;
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
  max-width: ${MAX_IMAGE_SIZE}px;
  width: fit-content;

  img {
    display: block;
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: ${MAX_IMAGE_SIZE}px;
    object-fit: contain;
  }
`;

export default ImageListComp;
