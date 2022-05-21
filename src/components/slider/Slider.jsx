import { useEffect, useState } from "react";
import "../../css/slider.css";

// TODO: definitely need to get TypeScript in here
export default function Slider({ data, handlePointsBottom }) {
  const repsArray = Array(data.reps)[0];
  const pointsArray = Array(data.points)[0];
  const max = repsArray.length;

  const [sliderPos, setSliderPos] = useState(0);
  const [reps, setReps] = useState(repsArray[0]);
  const [points, setPoints] = useState(pointsArray[0]);
  const [labelHeight, setLabelHeight] = useState(0 / max);


  useEffect(() => {
    setReps(repsArray[sliderPos]);
    setPoints(pointsArray[sliderPos]);
    setLabelHeight((sliderPos / max) * 100);
  }, [sliderPos]);

  // never refer to state in the same useEffect in which it's updated
  // this is why my points were using the PREVIOUS slider index
  // setPoints was right before a points reference, but setState is async
  useEffect(() => {
    handlePointsBottom(points)
  }, [points])



  return (
    // div contains the slider and the label underneath
    <div className="h-full">
      {/* div contains range input and <p> with hovering numbers */}
      <div className="relative border-2 h-full">
        <input
          type="range"
          name="slider"
          min={0}
          max={max - 1}
          value={sliderPos}
          className="cursor-pointer slider w-full h-full"
          onChange={e => setSliderPos(e.target.value)}
          orient="vertical"
        />

        <p className="absolute w-full h-full top-0 left-0 pointer-events-none">
          <span className="absolute px-1 left-0 text-left" style={{ bottom: labelHeight + "%" }}>
            {reps}
          </span>
        </p>
      </div>

      <div className="flex justify-between px-1">
        <span></span>
        <span>Pts</span>
      </div>

    </div>
  );
}
