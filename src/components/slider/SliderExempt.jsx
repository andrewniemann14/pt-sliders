import React from "react";
import "../../css/slider.css";

export default function SliderExempt() {

  return (
    // div contains the slider and the label underneath
    <div className="h-full">
      <div className="relative border-2 h-full">
        <input
          type="range"
          name="slider"
          className="cursor-pointer slider w-full h-full"
          orient="vertical"
          disabled='true'
        />
      </div>
    </div>
  );
}