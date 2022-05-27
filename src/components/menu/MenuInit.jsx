import { useState } from 'react'
import MenuController from './MenuController';

export default function MenuInit() {
  // false because it will be used as 'open' in MenuController
  const [closed, setClosed] = useState(false);

  return (
    <MenuController closed={closed} />
  )
}
