
import { FrameCoords, Point, Size } from './TypeRepository';


export const frameCoordsWithRotate = (
  dropPosition: Point,
  initialSize: Size,
  isRotate: boolean
): FrameCoords => {

  if (isRotate) {
    initialSize = {
      width: initialSize.height,
      height: initialSize.width
    }
  }

  const afterRotateFrameCoords = {
    nw: { x: dropPosition.x - (initialSize.width / 2), y: dropPosition.y - (initialSize.height / 2) },
    ne: { x: dropPosition.x + (initialSize.width / 2), y: dropPosition.y - (initialSize.height / 2) },
    sw: { x: dropPosition.x - (initialSize.width / 2), y: dropPosition.y + (initialSize.height / 2) },
    se: { x: dropPosition.x + (initialSize.width / 2), y: dropPosition.y + (initialSize.height / 2) },
    center: { x: dropPosition.x, y: dropPosition.y }
  }

  return afterRotateFrameCoords;
}