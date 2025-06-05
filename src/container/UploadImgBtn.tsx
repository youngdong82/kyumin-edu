import React, { useRef } from 'react';
import styled from 'styled-components';
import { useVersatileContainerStore } from '../shared/versatileContainerStore';
import { SimpleImageData, VersatileImage } from '../shared/TypeRepository';
import { getRandomPosition } from '../shared/getRandomPosition';


const MAX_IMAGE_SIZE = 100;
const SCALE = 4;
const allowedExtensions = new Set([
  "jpg",
  "jpeg",
  "png",
  "gif",
  "bmp",
  "webp",
]);

const UploadImgBtn: React.FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const {
    setSelectedVersatile,
    versatileContainer,
    setVersatileContainer
  } = useVersatileContainerStore();

  /** 새 이미지 객체 생성 후 상태 반영 */
  const onImageAdd = (imageData: SimpleImageData) => {
    const newVersatileImage: VersatileImage = {
      id: versatileContainer.length * Math.random(),
      dropPosition: getRandomPosition(),
      initialSize: { width: imageData.width, height: imageData.height },
      ratio: imageData.width / imageData.height,
      imageSrc: imageData.imageUrl,
      rotateState: 0,
      zIndex: versatileContainer.length + 1,
      isFixed: false,
    };
    setSelectedVersatile(newVersatileImage);
    setVersatileContainer([...versatileContainer, newVersatileImage]);
  }


  /** 파일 → HTMLImageElement 로드 (Object-URL 해제 포함) */
  const loadImage = (file: File): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
      const img = new Image();

      img.onload = () => {
        URL.revokeObjectURL(img.src); // 메모리 누수 방지
        resolve(img);
      };
      img.onerror = (err) => {
        URL.revokeObjectURL(img.src);
        reject(err);
      };

      img.src = URL.createObjectURL(file);
    });


  const handleCreateClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const file = event.target.files?.[0];
    if (!file) return;

    // 다시 업로드할 수 있도록 즉시 초기화
    event.target.value = "";

    const fileExt = file.name.split(".").pop()?.toLowerCase() ?? "";
    if (!allowedExtensions.has(fileExt)) {
      alert("jpg, png, gif, webp 등 이미지 파일만 업로드해 주세요.");
      return;
    }

    try {
      const img = await loadImage(file);
      const aspectRatio = img.width / img.height;

      const { width, height } =
        img.width >= img.height
          ? { width: MAX_IMAGE_SIZE, height: MAX_IMAGE_SIZE / aspectRatio }
          : { width: MAX_IMAGE_SIZE * aspectRatio, height: MAX_IMAGE_SIZE };

      const imageUrl = URL.createObjectURL(file); // 표시용 URL
      onImageAdd({ imageUrl, width: width * SCALE, height: height * SCALE });
    } catch (err) {
      console.error("Error loading image:", err);
      alert("이미지 로딩 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  return (
    <ButtonContainer>
      <Button onClick={handleCreateClick}>
        Upload
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
  width: fit-content;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  padding: 10px 20px;
  background-color: #f0f0f0;
  border: 1px solid #b8b8b8;
  &:hover {
    transform: scale(1.05);
  }
  transition: all 0.2s ease;
`;


export default UploadImgBtn;
