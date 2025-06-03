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
  imageSrc: string;
  rotateState: number;
  zIndex: number;
  isFixed: boolean;
}