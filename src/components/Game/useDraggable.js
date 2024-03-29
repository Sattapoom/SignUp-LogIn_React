import { useState, useEffect } from "react";

export default function useDraggable(el, DX, DY, setDX, setDY) {
  const [{ dx, dy }, setOffset] = useState({ dx: DX, dy: DY });

  useEffect(() => {
    const handleMouseDown = event => {
      const startX = event.pageX - dx;
      const startY = event.pageY - dy;

      const handleMouseMove = event => {
        const newDx = event.pageX - startX;
        const newDy = event.pageY - startY;
        setOffset({ dx: newDx, dy: newDy });
      };

      document.addEventListener("mousemove", handleMouseMove);

      document.addEventListener(
        "mouseup",
        () => {
          document.removeEventListener("mousemove", handleMouseMove);
        },
        { once: true }
      );
    };

    el.current.addEventListener("mousedown", handleMouseDown);

    return () => {
      el.current.removeEventListener("mousedown", handleMouseDown);
    };
  }, [dx, dy]);

  useEffect(() => {
    el.current.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    setDX(dx);
    setDY(dy);
  }, [dx, dy]);
  
  useEffect(() => {
    setOffset({ dx: DX, dy: DY });
  }, [DX, DY]);
}
