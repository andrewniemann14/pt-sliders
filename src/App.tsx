import React from 'react';

import Bracketeer from "./components/Bracketeer";
import ComponentColumn from "./components/slider/ComponentColumn";
import MenuController from "./components/menu/MenuController";
import OverallScore from "./components/OverallScore";

const MaxScoreContext = React.createContext<number>(100);
const BracketContext = React.createContext<object>({
  data: require('./data/male-30-34.json')
});



export default function App() {
  const [score, setScore] = React.useState<number>();
  const [strengthScore, setStrengthScore] = React.useState<number>();
  const [enduranceScore, setEnduranceScore] = React.useState<number>();
  const [cardioScore, setCardioScore] = React.useState<number>();

  // updates overall score whenever a component score changes
  React.useEffect(() => {
    setScore(strengthScore! + enduranceScore! + cardioScore!); // these are non-null assertion operators
  }, [strengthScore, enduranceScore, cardioScore]);

  function handleStrength(val: number): void {
    setStrengthScore(val);
  }
  function handleEndurance(val: number): void {
    setEnduranceScore(val);
  }
  function handleCardio(val: number): void {
    setCardioScore(val);
  }

  const [data, setData] = React.useState(require('./data/male-30-34.json'));


  function handleBracket(bracket: string): void {
    setData(require(`./data/${bracket}.json`));
  }


  return (
    <BracketContext.Provider value={data}>
      <div className='bg-white h-full w-full relative overflow-hidden'>
        {/* TODO: set goal score in upper left corner, while keeping score centered */}
        {/* only after slider auto-adjust is working */}
        <OverallScore score={score} />
        
        <MenuController closed={true} />

        {/* main slider section */}
        <div className="flex flex-row justify-around h-2/3 mt-2">
          <ComponentColumn category={'strength'} data={data.strength} handlePointsTop={handleStrength} />
          <ComponentColumn category={'endurance'} data={data.endurance} handlePointsTop={handleEndurance} />
          <ComponentColumn category={'cardio'} data={data.cardio} handlePointsTop={handleCardio} />
        </div>

        {/* change age/sex */}
        <Bracketeer handleBracket={handleBracket} />

      </div>
    </BracketContext.Provider>
  );
}