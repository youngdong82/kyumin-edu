export interface ImageData {
  id: string;
  imageUrl: string;
  width: number;
  height: number;
}

export interface PlaygroundImage extends ImageData {
  x: number;
  y: number;
}

export interface DraggableImageListProps {
  images: ImageData[];
  onImageAdd: (imageData: Omit<ImageData, "id">) => void;
}

