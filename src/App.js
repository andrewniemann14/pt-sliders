import { useEffect, useState } from "react";
import OverallScore from "./components/OverallScore";

import ComponentColumn from "./components/slider/ComponentColumn";

const data = require("./data/male-30-34.json");
const categories = Object.keys(data); // [strength, endurance, cardio]

export default function App() {
  const [score, setScore] = useState();
  const [strengthScore, setStrengthScore] = useState();
  const [enduranceScore, setEnduranceScore] = useState();
  const [cardioScore, setCardioScore] = useState();

  // updates overall score whenever a component score changes
  useEffect(() => {
    setScore(strengthScore + enduranceScore + cardioScore);
  }, [strengthScore, enduranceScore, cardioScore]);

  function handleStrength(val) {
    setStrengthScore(val);
  }
  function handleEndurance(val) {
    setEnduranceScore(val);
  }
  function handleCardio(val) {
    setCardioScore(val);
  }




  return (
    <div className='bg-white h-full w-full relative'>
      {/* TODO: set goal score in upper left corner, while keeping score centered */}
      <OverallScore score={score} />

      {/* main slider section */}
      <div className="flex flex-row justify-around h-3/4 border-t-2">
        {categories.map(c => {
          return (
            <ComponentColumn key={c} category={c} data={data[c]} handlePointsTop={(c === 'strength') ? handleStrength : (c === 'endurance') ? handleEndurance : handleCardio} />
          )
        })}
      </div>

      {/* change age/sex */}
      <p className="m-auto mt-8 text-center">Male, 30-34</p>
    </div>
  );
}
