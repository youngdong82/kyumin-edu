// // html2canvas 사용
import html2canvas from "html2canvas";

const scale = 4; // Increase this value for higher resolution

export const handleDownload = async (sheetRef: React.RefObject<HTMLDivElement>) => {
  const root = sheetRef.current;
  if (!root) return;


  // 모든 이미지 컴포넌트 찾기
  const targets = Array.from(root.querySelectorAll<HTMLElement>("[data-show]"));
  // 1) 보더 추가
  targets.forEach(el => {
    el.dataset.prevBorder = el.style.border ?? "";
    el.style.border = "1px solid blue";
  });

  try {
    const canvas = await html2canvas(root, { scale: scale, useCORS: true });
    canvas.toBlob(blob => {
      if (!blob) return;
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "playground.jpg";
      link.click();
      URL.revokeObjectURL(url);
      alert("Downloaded 🎉");
    }, "image/jpeg", 0.92);
  } catch (error) {
    console.error("Error generating image:", error);
    alert("Error generating image. Please try again.");
  } finally {
    // 2) 보더 원복
    targets.forEach(el => {
      el.style.border = el.dataset.prevBorder ?? "";
      delete el.dataset.prevBorder;
    });
  }

};