import React, { useState, useEffect, useRef } from "react";
import Draggable from "./Draggable";

export default function HuseSlider({ value, max, onChange }) {
  const [allowance, setAllowance] = useState(0);
  const element = useRef();
  const handle = useRef();

  useEffect(() => {
    setAllowance(handle.current.getBoundingClientRect().width / 2);
  });

  const clamp = (value, min, max) => {
    return Math.min(Math.max(value, min), max);
  };

  const handleDrag = position => {
    const box = element.current.getBoundingClientRect();
    const handle = clamp(position.x, box.left, box.right) - box.left;
    const value = (handle / box.width) * max;

    onChange(value);
  };

  const x = (value / max) * 100;

  const clampedX = clamp(x, 0, 100 - allowance);

  return (
    <Draggable onDrag={handleDrag}>
      {({ dragging }) => (
        <div
          className={
            dragging ? "hue-range-picker -dragging" : "hue-range-picker"
          }
          ref={element}
        >
          <div
            className="handle"
            style={{ left: `${clampedX}%` }}
            ref={handle}
          />
        </div>
      )}
    </Draggable>
  );
}
