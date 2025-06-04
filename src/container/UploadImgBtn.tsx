import React, { useRef } from 'react';
import styled from 'styled-components';
import { ImageData } from '../shared/types';

const MAX_IMAGE_SIZE = 100;

interface UploadImgBtnProps {
  onImageAdd: (imageData: Omit<ImageData, "id">) => void;
}

const UploadImgBtn: React.FC<UploadImgBtnProps> = ({ onImageAdd }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadImage = (file: File): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  };

  const handleCreateClick = () => {
    fileInputRef.current?.click();
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

  return (
    <ButtonContainer>
      <Button onClick={handleCreateClick}>
        Upload Image
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          style={{ display: "none" }}
        />
      </Button>
    </ButtonContainer>
  )
}


const ButtonContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0 1rem;
`;

const Button = styled.button`
  height: 32px;
  padding: 8px 16px;
  border: 1px solid gray;
  cursor: pointer;
  font-size: 14px;
  background-color: rgb(231, 231, 231);

  &:hover {
    transform: scale(1.05);
  }

  &:disabled {
    background-color:rgb(163, 163, 163);
    cursor: not-allowed;
  }
`;


export default UploadImgBtn;
