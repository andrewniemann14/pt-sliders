import React from 'react';

import Bracketeer from "./components/Bracketeer";
import ComponentColumn from "./components/slider/ComponentColumn";
import { DataContext } from './components/ContextWrapper';
import MenuController from "./components/menu/MenuController";
import OverallScore from "./components/OverallScore";

export default function App() {
  const [overallPoints, setOverallPoints] = React.useState<number>(100);
  const [overallMax, setOverallMax] = React.useState(100)
  const [strengthPoints, setStrengthPoints] = React.useState<number>();
  const [strengthMax, setStrengthMax] = React.useState<number>(20);
  const [endurancePoints, setEndurancePoints] = React.useState<number>();
  const [enduranceMax, setEnduranceMax] = React.useState<number>(20);
  const [cardioPoints, setCardioPoints] = React.useState<number>();
  const [cardioMax, setCardioMax] = React.useState<number>(60);

  // updates max score whenever
  React.useEffect(() => {
    setOverallMax(strengthMax! + enduranceMax! + cardioMax!);
  }, [strengthMax, enduranceMax, cardioMax, overallMax]);
  
  // updates overall score whenever a component score changes
  React.useEffect(() => {
    setOverallPoints((strengthPoints! + endurancePoints! + cardioPoints!));
  }, [strengthPoints, endurancePoints, cardioPoints]);

  function handleStrength(ex: boolean, val: number): void {
    ex ? setStrengthMax(0) : setStrengthMax(20)
    setStrengthPoints(val);
  }
  function handleEndurance(ex: boolean, val: number): void {
    ex ? setEnduranceMax(0) : setEnduranceMax(20)
    setEndurancePoints(val);
  }
  function handleCardio(ex: boolean, val: number): void {
    ex ? setCardioMax(0) : setCardioMax(60)
    setCardioPoints(val);
  }
  
  const [data, ] = React.useContext(DataContext)

  return (
    <div className='bg-white h-full w-full relative overflow-hidden'>
      {/* TODO: set goal score in upper left corner, while keeping score centered */}
      {/* only after slider auto-adjust is working */}
      <OverallScore score={overallPoints / overallMax * 100} />
      
      <MenuController closed={true} />

      {/* main slider section */}
      <div className="flex flex-row justify-around h-2/3 mt-2">
        <ComponentColumn category={'strength'} data={data.strength} handlePointsTop={handleStrength} />
        <ComponentColumn category={'endurance'} data={data.endurance} handlePointsTop={handleEndurance} />
        <ComponentColumn category={'cardio'} data={data.cardio} handlePointsTop={handleCardio} />
      </div>

      {/* change age/sex */}
      <Bracketeer />

    </div>
  );
}