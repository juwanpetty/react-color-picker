import React, { useState } from "react";

export default function Draggable({ children, onDrag }) {
  const [dragging, setDragging] = useState(false);

  const handleMouseDown = event => {
    event.stopPropagation();

    setDragging(true);
    handleDrag(event);
  };

  const handleMouseMove = event => {
    if (!dragging) {
      return;
    }

    handleDrag(event);
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleDrag = event => {
    onDrag({
      x: event.clientX,
      y: event.clientY
    });
  };

  return (
    <div
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseMove={handleMouseMove}
    >
      {children({ dragging })}
    </div>
  );
}
