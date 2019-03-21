import React, { useState } from "react";
import Draggable from "./Draggable";
import HueSlider from "./HueSlider";
import { TinyColor } from "@ctrl/tinycolor";
import "./App.css";

function App() {
  const [x, setX] = useState(100 * window.innerWidth);
  const [y, setY] = useState(0);
  const [h, setH] = useState(0);

  const s = (x / window.innerWidth) * 100;
  const v = 100 - (y / window.innerHeight) * 100;
  const handleSize = 8;
  const handleLeft = Math.min(window.innerWidth - handleSize, x);
  const handleTop = Math.min(window.innerHeight - handleSize, y);

  const handleDrag = position => {
    setX(position.x);
    setY(position.y);
  };

  const handleHueChange = value => {
    setH(value);
  };

  return (
    <div className="color-picker">
      <Draggable onDrag={handleDrag}>
        {({ dragging }) => (
          <div
            className={dragging ? "screen -hue -dragging" : "screen -hue"}
            style={{ background: `hsl(${h}, 100%, 50%)` }}
          />
        )}
      </Draggable>
      <div className="screen -white" />
      <div className="screen -black" />
      <div
        className="color-picker-pointer"
        style={{ top: handleTop, left: handleLeft }}
      />

      <footer className="color-picker-panel">
        <div className="hexcode">
          {new TinyColor({ h, s, v }).toHexString()}
        </div>
        <HueSlider value={h} min={0} max={360} onChange={handleHueChange} />

        <div
          className="color"
          style={{ background: new TinyColor({ h, s, v }).toHslString() }}
        />
      </footer>
    </div>
  );
}

export default App;
