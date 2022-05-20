import { useEffect, useState } from "react";
import "../../css/slider.css";

// TODO: definitely need to get TypeScript in here
export default function Slider({ data, handlePoints }) {
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
    handlePoints(points)
  }, [points])



  return (
    <>
    <div className="relative border-2">
      <input
        type="range"
        name="slider"
        min={0}
        max={max - 1}
        value={sliderPos}
        className="h-[500px] cursor-pointer slider"
        onChange={e => setSliderPos(e.target.value)}
        orient="vertical"
      />

      <p className="absolute w-full h-full top-0 left-0 -z-10">
        <span className="absolute px-4 left-0 text-left" style={{ bottom: labelHeight + "%" }}>
          {reps}
        </span>
        <span className='absolute px-4 right-0 text-right' style={{ bottom: labelHeight + "%" }}>
          {points}
        </span>
      </p>
    </div>
    <p className="flex justify-between px-1"><span>reps</span><span>points</span></p>
    </>
  );
}
