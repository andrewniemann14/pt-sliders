import { useState } from 'react'

import ComponentSelector from './ComponentSelector'
import Slider from './Slider'


export default function ComponentColumn({category, data, handlePoints}) {
  const components = Object.keys(data);
  // const capitalizedCat = category.slice(0,1).toUpperCase()+category.slice(1);
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

  return (
    <div className="flex flex-col text-center w-1/4 h-80">
      <h3>{categoryName}</h3>
      <ComponentSelector handleSelect={handleSelect} options={components} />

      <Slider data={data[component]} handlePoints={handlePoints} />
    </div>
  );
}
