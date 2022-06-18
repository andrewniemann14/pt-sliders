import React from 'react';

import Bracketeer from "./components/Bracketeer";
import ComponentColumn from "./components/slider/ComponentColumn";
import { DataContext } from './components/ContextWrapper';
import MenuController from "./components/menu/MenuController";
import OverallScore from "./components/OverallScore";

export default function App() {

  
  const [score, setScore] = React.useState<number>(100);
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

  interface DataFile {
    strength: {
      "push-ups": DataComponent,
      "hand-release-push-ups": DataComponent
    },
    endurance: {
      "sit-ups": DataComponent,
      "crunches": DataComponent,
      plank: DataComponent
    },
    cardio: {
      run: DataComponent,
      hamr: DataComponent
    }
  }
  
  interface DataComponent {
    component: string,
    reps: number[],
    points: number[]
  }
  
  const [data, ] = React.useContext(DataContext)


  return (
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
      <Bracketeer />

    </div>
  );
}