import { useEffect, useState } from "react";

import Bracketeer from "./components/Bracketeer";
import ComponentColumn from "./components/slider/ComponentColumn";
import MenuController from "./components/menu/MenuController";
import OverallScore from "./components/OverallScore";


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

  const [data, setData] = useState(require('./data/male-30-34.json'));


  function handleBracket(bracket) {
    setData(require(`./data/${bracket}.json`));
  }


  return (
    <div className='bg-white h-full w-full relative overflow-hidden'>
      {/* TODO: set goal score in upper left corner, while keeping score centered */}
      {/* only after slider auto-adjust is working */}
      <OverallScore score={score} />
      
      <MenuController />

      {/* main slider section */}
      <div className="flex flex-row justify-around h-2/3 mt-2">
        <ComponentColumn category={'strength'} data={data.strength} handlePointsTop={handleStrength} />
        <ComponentColumn category={'endurance'} data={data.endurance} handlePointsTop={handleEndurance} />
        <ComponentColumn category={'cardio'} data={data.cardio} handlePointsTop={handleCardio} />
      </div>

      {/* change age/sex */}
      <Bracketeer handleBracket={handleBracket} />

    </div>
  );
}