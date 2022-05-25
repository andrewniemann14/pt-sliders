import { useEffect, useState } from "react";
import Bracketeer from "./components/Bracketeer";
import Menu from "./components/menu/Menu";
import MenuButton from "./components/menu/MenuButton";
import OverallScore from "./components/OverallScore";

import ComponentColumn from "./components/slider/ComponentColumn";

// let data = require("./data/male-30-34.json");


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

  const categories = ['strength', 'endurance', 'cardio']
  const [data, setData] = useState(require('./data/male-30-34.json'));


  function handleBracket(bracket) {
    setData(require(`./data/${bracket}.json`));
  }

  const [open, setOpen] = useState(false);
  function handleMenu() {
    setOpen(!open);
  }



  return (
    <div className='bg-white h-full w-full relative overflow-hidden'>
      {/* TODO: set goal score in upper left corner, while keeping score centered */}
      {/* only after slider auto-adjust is working */}
      <OverallScore score={score} />
      
      <MenuButton handler={handleMenu} />
      <Menu open={open} />

      {/* main slider section */}
      <div className="flex flex-row justify-around h-3/4">
        <ComponentColumn category={'strength'} data={data.strength} handlePointsTop={handleStrength} />
        <ComponentColumn category={'endurance'} data={data.endurance} handlePointsTop={handleEndurance} />
        <ComponentColumn category={'cardio'} data={data.cardio} handlePointsTop={handleCardio} />
      </div>

      {/* change age/sex */}
      <Bracketeer handleBracket={handleBracket} />

    </div>
  );
}