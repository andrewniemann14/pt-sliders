import { useState } from 'react'

import ComponentSelector from './ComponentSelector'
import Slider from './Slider'


export default function ComponentColumn({category, data, handlePointsTop}) {
  const components = Object.keys(data);
  // const capitalizedCat = category.slice(0,1).toUpperCase()+category.slice(1);
  const [compScore, setCompScore] = useState();
  let categoryName;
  switch (category) {
    case 'strength':
      categoryName = 'STR';
      break;
    case 'endurance':
      categoryName = 'END';
      break;
    case 'cardio':
      categoryName = 'VO2';
      break;
    default:
      break;
  }

  const [component, setComponent] = useState(components[0])
  
  function handleSelect(option) {
    setComponent(option);
  }

  function handlePointsMiddle(points) {
    setCompScore(points);
    handlePointsTop(points)
  }

  return (
    <div className="flex flex-col text-center w-1/4 h-full">
      <h3 className='flex justify-between'><span>{categoryName}:</span><span className='font-bold'>{compScore}</span></h3>

      <Slider data={data[component]} handlePointsBottom={handlePointsMiddle} />
      <ComponentSelector handleSelect={handleSelect} options={components} />
    </div>
  );
}
