import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import html2canvas from "html2canvas";
import DraggableResizableDiv from "./draggable/DraggableDiv";
import DraggableImageList from "./container/DraggableImageList";
import { ImageData, PlaygroundImage } from "./shared/types";
import { useStore } from "./shared/selectedCategory";
import DraggableCategoryImageList from "./container/DraggableCategoryImageList";

type RatioKey =
  | "wide-16-9"
  | "wide-3-2"
  | "wide-4-3"
  | "square-1-1"
  | "tall-9-16"
  | "tall-2-3"
  | "tall-3-4";

const MAX_IMAGE_SIZE = 180;

const DEFAULT_MONITOR = 1080;
// const DEFAULT_MONITOR = 1920;

export default function App() {
  const [ratio, setRatio] = useState<RatioKey>("wide-16-9");
  const [uploadedImages, setUploadedImages] = useState<ImageData[]>([]);
  const [playgroundImages, setPlaygroundImages] = useState<PlaygroundImage[]>(
    [],
  );
  const [selectedDivId, setSelectedDivId] = useState<string | null>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const playgroundRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const { selectedCategory, setSelectedCategory } = useStore();

  const ratioOptions: Record<RatioKey, { label: string; ratio: number }> = {
    "wide-16-9": { label: "Wide 16:9", ratio: 16 / 9 },
    "wide-3-2": { label: "Wide 3:2", ratio: 3 / 2 },
    "wide-4-3": { label: "Wide 4:3", ratio: 4 / 3 },
    "square-1-1": { label: "Square 1:1", ratio: 1 / 1 },
    "tall-9-16": { label: "Tall 9:16", ratio: 9 / 16 },
    "tall-2-3": { label: "Tall 2:3", ratio: 2 / 3 },
    "tall-3-4": { label: "Tall 3:4", ratio: 3 / 4 },
  };

  const groupedRatios = {
    wide: ["wide-16-9", "wide-3-2", "wide-4-3"] as RatioKey[],
    square: ["square-1-1"] as RatioKey[],
    tall: ["tall-9-16", "tall-2-3", "tall-3-4"] as RatioKey[],
  };
  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        const padding = 40;
        const availableWidth = Math.min(
          containerRef.current.offsetWidth - padding,
          DEFAULT_MONITOR,
        );
        setContainerWidth(availableWidth);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  const getPlaygroundDimensions = () => {
    const selectedRatio = ratioOptions[ratio].ratio;
    return {
      width: containerWidth,
      height: containerWidth / selectedRatio,
    };
  };

  const dimensions = getPlaygroundDimensions();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = "copy";
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const playgroundRect = playgroundRef.current?.getBoundingClientRect();
    if (!playgroundRect) return;

    // Calculate position relative to playground
    const x = e.clientX - playgroundRect.left;
    const y = e.clientY - playgroundRect.top;

    // Get the dropped image data
    const droppedImage = JSON.parse(
      e.dataTransfer.getData("application/json"),
    ) as ImageData;

    // Check if the longest side exceeds MAX_IMAGE_SIZE and scale if necessary
    let { width, height } = droppedImage;
    if (Math.max(width, height) > MAX_IMAGE_SIZE) {
      const scale = MAX_IMAGE_SIZE / Math.max(width, height);
      width = width * scale;
      height = height * scale;
    }
    // Center the image at the drop point
    const centerX = Math.max(0, x - width / 2);
    const centerY = Math.max(0, y - height / 2);

    // Ensure the image doesn't go beyond playground boundaries
    const maxX = playgroundRect.width - width;
    const maxY = playgroundRect.height - height;

    const boundedX = Math.min(Math.max(0, centerX), maxX);
    const boundedY = Math.min(Math.max(0, centerY), maxY);

    const newId =
      playgroundImages.length > 0
        ? "u_" +
        (Math.max(
          ...playgroundImages.map((d) => parseInt(d.id.slice(2), 10)),
        ) +
          1)
        : "u_0";

    const newPlaygroundImage: PlaygroundImage = {
      ...droppedImage,
      id: newId,
      width, // Use scaled width
      height, // Use scaled height
      x: boundedX,
      y: boundedY,
    };

    setPlaygroundImages([...playgroundImages, newPlaygroundImage]);
  };

  const handleImageAdd = (imageData: Omit<ImageData, "id">) => {
    const newId =
      playgroundImages.length > 0
        ? "u_" +
        (Math.max(
          ...playgroundImages.map((d) => parseInt(d.id.slice(2), 10)),
        ) +
          1)
        : "u_0";
    setUploadedImages([...uploadedImages, { ...imageData, id: newId }]);
  };

  const handleDeleteDiv = () => {
    if (selectedDivId !== null) {
      setPlaygroundImages(
        playgroundImages.filter((img) => img.id !== selectedDivId),
      );
      setSelectedDivId(null);
    }
  };

  // html2canvas 사용
  const handleDownload = async () => {
    if (playgroundRef.current) {
      const draggableDivs = playgroundRef.current.querySelectorAll(
        "[data-draggable-div]",
      );
      draggableDivs.forEach((div) => {
        // (div as HTMLElement).style.border = "1px solid blue";
        const resizeHandles = div.querySelectorAll("[data-resize-handle]");
        resizeHandles.forEach(
          (handle) => ((handle as HTMLElement).style.display = "none"),
        );
      });

      try {
        const scale = 5; // Increase this value for higher resolution
        const canvas = await html2canvas(playgroundRef.current, { scale });
        const dataUrl = canvas.toDataURL("image/jpeg");
        const link = document.createElement("a");
        link.download = "playground.jpg";
        link.href = dataUrl;
        link.click();
      } catch (error) {
        console.error("Error generating image:", error);
        alert("There was an error generating the image. Please try again.");
      } finally {
        // Restore original styles
        draggableDivs.forEach((div) => {
          (div as HTMLElement).style.border = "";
          const resizeHandles = div.querySelectorAll("[data-resize-handle]");
          resizeHandles.forEach(
            (handle) => ((handle as HTMLElement).style.display = ""),
          );
        });
      }
    }
  };

  const handleSelectDiv = (id: string) => {
    setSelectedDivId(id);
  };

  const handlePlaygroundClick = (e: React.MouseEvent) => {
    if (e.target === playgroundRef.current) {
      setSelectedDivId(null);
    }
  };

  return (
    <Main ref={containerRef}>
      <Title>HWANG KYU MIN</Title>
      <RatioSection>
        <RatioGroup>
          <ButtonGroup>
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
          </ButtonGroup>
        </RatioGroup>
      </RatioSection>
      <Playground
        ref={playgroundRef}
        onClick={handlePlaygroundClick}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        style={{
          width: dimensions.width,
          height: dimensions.height,
        }}
      >
        {playgroundImages.map((image) => (
          <DraggableResizableDiv
            key={image.id}
            $isSelected={selectedDivId === image.id}
            onSelect={() => handleSelectDiv(image.id)}
            parentSize={{
              width: playgroundRef.current?.clientWidth || 600,
              height: playgroundRef.current?.clientHeight || 400,
            }}
            $backgroundImage={image.imageUrl}
            initialSize={{ width: image.width, height: image.height }}
            initialPosition={{ x: image.x, y: image.y }}
            onDelete={() => handleDeleteDiv()}
          />
        ))}
      </Playground>
      <CategoryButtonGroup>
        <CategoryButton
          $isSelected={selectedCategory === "Buildings"}
          onClick={() => setSelectedCategory("Buildings")}
        >
          Buildings
        </CategoryButton>
        <CategoryButton
          $isSelected={selectedCategory === "People"}
          onClick={() => setSelectedCategory("People")}
        >
          People
        </CategoryButton>
      </CategoryButtonGroup>
      <DraggableCategoryImageList />

      <DraggableImageList images={uploadedImages} onImageAdd={handleImageAdd} />

      <ControlPanel>
        <Button onClick={handleDownload}>Download</Button>
      </ControlPanel>
    </Main>
  );
}

const Main = styled.main`
  padding: 20px;
  max-width: 100%;
  margin: 0 auto;
  background-color: #f0f0f0;
`;

const Title = styled.h1`
  font-size: 30px;
  margin-bottom: 40px;
`;

const RatioSection = styled.div`
  margin-bottom: 24px;
`;

const RatioGroup = styled.div`
  margin-bottom: 16px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 8px;
`;
const RatioButton = styled.button<{ $isSelected: boolean }>`
  padding: 8px 16px;
  font-size: 14px;
  border: 1px solid gray;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${(props) => (props.$isSelected ? "#3B82F6" : "#E5E7EB")};
  color: ${(props) => (props.$isSelected ? "white" : "black")};

  &:hover {
    background-color: #357abd;
  }
`;

const Playground = styled.div`
  width: 100vw;
  height: auto;
  border: 1px solid gray;
  position: relative;
  margin: 20px 0;
  background-color: white;
`;

const CategoryButtonGroup = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 16px;
`;

const CategoryButton = styled.button<{ $isSelected: boolean }>`
  padding: 8px 16px;
  font-size: 14px;
  border: 1px solid gray;
  cursor: pointer;
  transition: all 0.2s ease;
  background-color: ${(props) => (props.$isSelected ? "#3B82F6" : "#E5E7EB")};
  color: ${(props) => (props.$isSelected ? "white" : "black")};

  &:hover {
    background-color: #357abd;
  }
`;

const ControlPanel = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  border: 1px solid gray;
  cursor: pointer;
  font-size: 16px;
  background-color: white;

  &:hover {
    background-color: #357abd;
    color: white;
  }

  &:disabled {
    background-color: #cccccc;
    cursor: not-allowed;
  }
`;
