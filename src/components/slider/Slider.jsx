import React from "react";
import "../../css/slider.css";
import { DataContext } from "../ContextWrapper";

// TODO: when bracket changes, adjust slider to new minimum so score doesn't go out of range and show NaN
export default function Slider({ category, component, handlePointsSlider }) {
  const [data, ] = React.useContext(DataContext);
  const repsArray = Array(data[category][component].reps)[0]
  const pointsArray = Array(data[category][component].points)[0]
  const max = repsArray.length;

  const [sliderPos, setSliderPos] = React.useState(-max+1);
  React.useEffect(() => {
    setSliderPos(-max + 1);
  }, [max])
  const [reps, setReps] = React.useState(repsArray[0]);
  const [points, setPoints] = React.useState(pointsArray[0]);
  const [labelHeight, setLabelHeight] = React.useState(0 / max);

  // Math.abs being used to handle reverse order of reps/points in JSON
  React.useEffect(() => {
    setReps(repsArray[Math.abs(sliderPos)]);
    setPoints(pointsArray[Math.abs(sliderPos)]);
    setLabelHeight((Math.abs(sliderPos) / max) * 100 - 5);
  }, [data, sliderPos, max, handlePointsSlider]);

  // never refer to state in the same useEffect in which it's updated
  // this is why my points were using the PREVIOUS slider index
  // setPoints was right before a points reference, but setState is async
  React.useEffect(() => {
    handlePointsSlider(points)
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
          defaultValue={sliderPos}
          className="cursor-pointer slider w-full h-full"
          onChange={e => setSliderPos(e.target.value)}
          orient="vertical"
        />

        <p className="absolute w-full h-full top-0 left-0 pointer-events-none flex flex-col items-center">
          {/* top being used instead of bottom to handle reversed JSON */}
          <span className="absolute text-center m-auto font-bold text-xl -mt-2 md:-mt-4" style={{ top: labelHeight + "%" }}>
            {reps}
          </span>
        </p>
      </div>

    </div>
  );
}
