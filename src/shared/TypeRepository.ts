export interface Point {
  x: number;
  y: number;
}

export interface FrameCoords {
  nw: Point;
  ne: Point;
  sw: Point;
  se: Point;
  center: Point;
}

export interface Size {
  width: number;
  height: number;
}

export type CornerKey = 'nw' | 'ne' | 'se' | 'sw';   // short form

// or full words if you prefer readability
export type CornerKeyLong = 'northWest' | 'northEast' | 'southEast' | 'southWest';


export interface VersatileImage {
  id: number;
  dropPosition: Point;
  initialSize: Size;
  ratio: number;
  imageSrc: string;
  rotateState: number;
  zIndex: number;
  isFixed: boolean;
}

export type RatioKey =
  | "wide-16-9"
  | "wide-3-2"
  | "wide-4-3"
  | "square-1-1"
  | "tall-9-16"
  | "tall-2-3"
  | "tall-3-4";


export interface SimpleImageData {
  imageUrl: string;
  width: number;
  height: number;
}