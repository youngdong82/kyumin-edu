export const flipImage = (imageSrc: string, direction: 'horizontal' | 'vertical'): Promise<string> => {

  return new Promise((resolve) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = imageSrc;

    img.onload = () => {
      const w = img.naturalWidth;
      const h = img.naturalHeight;

      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d")!;

      canvas.width = w;
      canvas.height = h;

      ctx.save();

      // Flip 처리
      if (direction === 'horizontal') {
        ctx.translate(w, 0);
        ctx.scale(-1, 1);
      } else if (direction === 'vertical') {
        ctx.translate(0, h);
        ctx.scale(1, -1);
      }

      ctx.drawImage(img, 0, 0, w, h);
      ctx.restore();

      const newSrc = canvas.toDataURL("image/png");
      resolve(newSrc);
    };
  });
}