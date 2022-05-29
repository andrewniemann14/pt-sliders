import { useState } from 'react'

import ComponentSelector from './ComponentSelector'
import Slider from './Slider'
import { ReactComponent as Pushups } from '../../img/pushups-man-svgrepo-com.svg';
import { ReactComponent as Situps } from '../../img/vending-knees-svgrepo-com.svg';
import { ReactComponent as Running } from '../../img/running-man-svgrepo-com.svg';


export default function ComponentColumn({category, data, handlePointsTop}) {
  const components = Object.keys(data); // TODO:
  const [component, setComponent] = useState(components[0])
  function handleSelect(option) {
    setComponent(option);
  }
  
    const [compScore, setCompScore] = useState();
    function handlePointsMiddle(points) {
      setCompScore(points);
      handlePointsTop(points)
    }
  

  return (
    <div className="flex flex-col text-center w-1/4 h-full">
      <div className='flex justify-between mb-6'>
        {category === 'strength' ? <Pushups /> : category === 'endurance' ? <Situps /> : <Running />}
        <span className='font-bold'>{compScore}</span>
      </div>

      <Slider data={data[component]} handlePointsBottom={handlePointsMiddle} />
      <ComponentSelector handleSelect={handleSelect} options={components} data={data} />
    </div>
  );
}