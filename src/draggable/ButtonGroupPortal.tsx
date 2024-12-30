// ButtonGroupPortal.tsx
import React from "react";
import ReactDOM from "react-dom";

interface ButtonGroupPortalProps {
  x: number;
  y: number;
  children: React.ReactNode;
}

export default function ButtonGroupPortal({ x, y, children }: ButtonGroupPortalProps) {
  // portalRoot 라는 HTML 요소를 index.html 등에 만들어둔 상태라고 가정
  const portalRoot = document.getElementById("portal-root") as HTMLElement;

  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        zIndex: 9999 // PlaygroundSheet보다 앞에 오도록
      }}
    >
      {children}
    </div>,
    portalRoot
  );
}
