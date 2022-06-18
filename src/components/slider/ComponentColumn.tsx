import React from 'react'

import ComponentSelector from './ComponentSelector'
import { MaxOverallScoreContext } from '../ContextWrapper'
import Slider from './Slider'
import { ReactComponent as Pushups } from '../../img/pushups-man-svgrepo-com.svg';
import { ReactComponent as Situps } from '../../img/vending-knees-svgrepo-com.svg';
import { ReactComponent as Running } from '../../img/running-man-svgrepo-com.svg';
import SliderExempt from './SliderExempt';


export default function ComponentColumn({category, data, handlePointsTop}) {
  let components: string[] = Object.keys(data);
  components.push('EXEMPT');

  const [maxOverallScore, setMaxOverallScore] = React.useContext(MaxOverallScoreContext)
  const maxPoints: number = data[components[0]].points[0]; // differs by category, regardless of exempt status
  
  const [component, setComponent] = React.useState(components[0])

  function handleSelect(option: string) {
    if (option === 'EXEMPT') {
      setMaxOverallScore(maxOverallScore - maxPoints)
    }
    // else {
      // maxScore += maxPoints
      // }
    setComponent(option);
  }
  
  const [compScore, setCompScore] = React.useState<number>();

  function handlePointsColumn(points: number) {
    setCompScore(points);
    handlePointsTop(points)
  }
  

  return (
    <div className="flex flex-col text-center w-1/4 h-full">
      <div className='flex justify-between mb-6 border-b-2'>
        {category === 'strength' ? <Pushups /> : category === 'endurance' ? <Situps /> : <Running />}
        <span className='font-bold text-lg'>{compScore}</span>
      </div>

      {/* TODO: slider's initial position needs to be updated when component/bracket changes */}
      {component === 'EXEMPT' ? 
        <SliderExempt /> : 
        <Slider category={category} component={component} handlePointsSlider={handlePointsColumn} />
      }
      <ComponentSelector handleSelect={handleSelect} options={components} data={data} />
    </div>
  );
}