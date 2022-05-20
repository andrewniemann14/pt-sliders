import { useState } from 'react'

import ComponentSelector from './ComponentSelector'
import Slider from './Slider'


export default function ComponentColumn({category, data, handlePoints}) {
  const components = Object.keys(data);
  const capitalizedCat = category.slice(0,1).toUpperCase()+category.slice(1);

  const [component, setComponent] = useState(components[0])
  
  function handleSelect(option) {
    setComponent(option);
  }

  return (
    <div className="flex flex-col text-center">
      <h3>{capitalizedCat}</h3>
      <ComponentSelector handleSelect={handleSelect} options={components} />

      <Slider data={data[component]} handlePoints={handlePoints} />
    </div>
  );
}
