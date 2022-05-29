import { useEffect, useState } from "react";
import "../../css/slider.css";

// TODO: definitely need to get TypeScript in here
export default function Slider({ data, handlePointsBottom }) {
  const repsArray = Array(data.reps)[0]
  const pointsArray = Array(data.points)[0]
  const max = repsArray.length;

  const [sliderPos, setSliderPos] = useState(-max+1);
  const [reps, setReps] = useState(repsArray[0]);
  const [points, setPoints] = useState(pointsArray[0]);
  const [labelHeight, setLabelHeight] = useState(0 / max);


  // Math.abs being used to handle reverse order of reps/points in JSON
  useEffect(() => {
    setReps(repsArray[Math.abs(sliderPos)]);
    setPoints(pointsArray[Math.abs(sliderPos)]);
    setLabelHeight((Math.abs(sliderPos) / max) * 100 - 5);
  }, [data, sliderPos]);

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
          // min and max switched to handle reversed JSON
          max={0}
          min={-max + 1}
          value={sliderPos}
          className="cursor-pointer slider w-full h-full"
          onChange={e => setSliderPos(e.target.value)}
          orient="vertical"
        />

        <p className="absolute w-full h-full top-0 left-0 pointer-events-none flex flex-col items-center">
          {/* top being used instead of bottom to handle reversed JSON */}
          <span className="absolute text-center m-auto font-bold -mt-4" style={{ top: labelHeight + "%" }}>
            {reps}
          </span>
        </p>
      </div>

    </div>
  );
}
