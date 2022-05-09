import { useEffect, useState } from "react";
import "../App.css";

export default function Slider({ data, handler }) {
  // const component = data.component;
  const repsArray = data.reps;
  const pointsArray = data.points;
  const max = data.reps.length;

  const [sliderPos, setSliderPos] = useState(0);
  const [reps, setReps] = useState(repsArray[sliderPos]);
  const [points, setPoints] = useState(pointsArray[sliderPos]);
  const [labelHeight, setLabelHeight] = useState(sliderPos / max);

  useEffect(() => {
    setReps(repsArray[sliderPos]);
    setPoints(pointsArray[sliderPos]);
    setLabelHeight((sliderPos / max) * 100);
  }, [sliderPos]);

  useEffect(() => {
    handler(points);
  }, [points]);

  return (
    <div className="container-slider">
      <input
        type="range"
        name="slider"
        min={0}
        max={max - 1}
        value={sliderPos}
        className="slider"
        onChange={(e) => setSliderPos(e.target.value)}
        orient="vertical"
      />

      <p className="label">
        <span className="reps" style={{ bottom: labelHeight + "%" }}>
          {reps}
        </span>
        <span className="points" style={{ bottom: labelHeight + "%" }}>
          {points}
        </span>
      </p>
    </div>
  );
}
