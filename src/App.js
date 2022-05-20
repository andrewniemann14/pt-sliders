import { useEffect, useState } from "react";

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
    <div className=''>
      {/* 1. show current score  2. set goal score */}
      <h2 className="text-center text-4xl">{score}</h2>

      {/* main slider section */}
      <div className="flex flex-row justify-around">
        {categories.map(c => {
          return (
            <ComponentColumn key={c} category={c} data={data[c]} handlePoints={(c === 'strength') ? handleStrength : (c === 'endurance') ? handleEndurance : handleCardio} />
          )
        })}
      </div>

      {/* change age/sex */}

    </div>
  );
}
