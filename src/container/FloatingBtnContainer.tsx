import React from "react";
import styled from "styled-components";
import { flipImage } from '../shared/flipImage';
import { useVersatileContainerStore } from '../shared/versatileContainerStore';

const FloatingBtnContainer = () => {
  const {
    selectedVersatile,
    setSelectedVersatile,
    versatileContainer,
    setVersatileContainer
  } = useVersatileContainerStore();


  const toggleFix = () => {
    if (selectedVersatile !== null) {
      const newContainer = versatileContainer.map((each) =>
        each.id === selectedVersatile.id ? { ...each, isFixed: !each.isFixed } : each
      );
      setVersatileContainer(newContainer);
      setSelectedVersatile({ ...selectedVersatile, isFixed: !selectedVersatile.isFixed });
    }
  }

  const handleDelete = () => {
    if (selectedVersatile !== null) {
      setVersatileContainer(versatileContainer.filter((each) => each.id !== selectedVersatile.id));
      setSelectedVersatile(null);
    }
  };

  const handleRotateLeft = () => {
    if (selectedVersatile !== null && !selectedVersatile.isFixed) {
      setVersatileContainer(versatileContainer.map((each) => each.id === selectedVersatile.id ? { ...each, rotateState: each.rotateState - 1 } : each));
    }
  }

  const handleRotateRight = () => {
    if (selectedVersatile !== null && !selectedVersatile.isFixed) {
      setVersatileContainer(versatileContainer.map((each) => each.id === selectedVersatile.id ? { ...each, rotateState: each.rotateState + 1 } : each));
    }
  }

  const increaseZIndex = () => {
    if (selectedVersatile !== null) {
      const newContainer = versatileContainer.map((each) =>
        each.id === selectedVersatile.id ? { ...each, zIndex: each.zIndex + 1 } : each
      );
      setVersatileContainer(newContainer);
      setSelectedVersatile({ ...selectedVersatile, zIndex: selectedVersatile.zIndex + 1 });
    }
  }

  const decreaseZIndex = () => {
    if (selectedVersatile !== null) {
      const newContainer = versatileContainer.map((each) =>
        each.id === selectedVersatile.id ? { ...each, zIndex: each.zIndex - 1 } : each
      );
      setVersatileContainer(newContainer);
      setSelectedVersatile({ ...selectedVersatile, zIndex: selectedVersatile.zIndex - 1 });
    }
  }

  const flipHorizontal = async () => {
    if (selectedVersatile !== null && !selectedVersatile.isFixed) {
      const newImageSrc = await flipImage(selectedVersatile.imageSrc, 'horizontal');
      setVersatileContainer(versatileContainer.map((each) => each.id === selectedVersatile.id ? {
        ...each,
        imageSrc: newImageSrc
      } : each));
      setSelectedVersatile({ ...selectedVersatile, imageSrc: newImageSrc || selectedVersatile.imageSrc });
    }
  }
  const flipVertical = async () => {
    if (selectedVersatile !== null && !selectedVersatile.isFixed) {
      const newImageSrc = await flipImage(selectedVersatile.imageSrc, 'vertical');
      setVersatileContainer(versatileContainer.map((each) => each.id === selectedVersatile.id ? {
        ...each,
        imageSrc: newImageSrc
      } : each));
      setSelectedVersatile({ ...selectedVersatile, imageSrc: newImageSrc || selectedVersatile.imageSrc });
    }
  }


  return (
    <>
      {selectedVersatile && (
        <ButtonGroup>
          <ControlButtonBox>
            <ControlButton onClick={toggleFix} data-resize-handle>
              {selectedVersatile.isFixed ? "Free" : "Fix"}
            </ControlButton>
            <ControlButton onClick={handleDelete} data-resize-handle>
              X
            </ControlButton>
          </ControlButtonBox>
          <ControlButtonBox>
            <ControlButton>depth:{selectedVersatile.zIndex}</ControlButton>
            <ControlButton onClick={increaseZIndex}>+</ControlButton>
            <ControlButton onClick={decreaseZIndex}>-</ControlButton>
          </ControlButtonBox>
          <ControlButtonBox>
            <ControlButton onClick={handleRotateLeft} data-resize-handle>
              ↺
            </ControlButton>
            <ControlButton onClick={handleRotateRight} data-resize-handle>
              ↻
            </ControlButton>
            <ControlButton onClick={flipHorizontal} data-resize-handle>
              ⇄
            </ControlButton>
            <ControlButton onClick={flipVertical} data-resize-handle>
              ⇅
            </ControlButton>
          </ControlButtonBox>
        </ButtonGroup>
      )}
    </ >
  );
}


const ButtonGroup = styled.div`
  width: 100%;
  position: absolute;
  bottom: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  z-index: 100;
  white-space: nowrap;
`;

const ControlButtonBox = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;

const ControlButton = styled.button`
  padding: 5px 10px;
  background-color: #f0f0f0;
  border: 1px solid #b8b8b8;
  cursor: pointer;

  &:hover {
    background-color: #b8b8b8;
  }
`;

export default FloatingBtnContainer;