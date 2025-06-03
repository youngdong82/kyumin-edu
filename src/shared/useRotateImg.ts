import { useState, useEffect } from "react";

export function useRotatedImage(imageSrc: string, angle: number = 90): string | null {
  const [rotatedSrc, setRotatedSrc] = useState<string | null>(null);

  useEffect(() => {
    if (!imageSrc) return;

    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    img.onload = () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;

      // 각도 정규화: 음수도 허용 (ex: -90 → 270)
      const normalizedAngle = ((angle % 360) + 360) % 360;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;

      if (normalizedAngle === 90 || normalizedAngle === 270) {
        canvas.width = h;
        canvas.height = w;
      } else {
        canvas.width = w;
        canvas.height = h;
      }

      ctx.save();

      switch (normalizedAngle) {
        case 90:
          ctx.translate(h, 0);
          ctx.rotate(Math.PI / 2);
          break;
        case 180:
          ctx.translate(w, h);
          ctx.rotate(Math.PI);
          break;
        case 270:
          ctx.translate(0, w);
          ctx.rotate(3 * Math.PI / 2);
          break;
        case 0:
        default:
          // no rotation
          break;
      }

      ctx.drawImage(img, 0, 0, w, h);
      ctx.restore();

      const newSrc = canvas.toDataURL("image/png");
      setRotatedSrc(newSrc);
    };
  }, [imageSrc, angle]);

  return rotatedSrc;
}
