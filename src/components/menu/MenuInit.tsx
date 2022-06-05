import { useState } from 'react'
import MenuController from './MenuController';

const MenuInit = () => {
  // false because it will be used as 'open' in MenuController
  const [closed, setClosed] = useState<boolean>(false);

  return (
    <MenuController closed={closed} />
  )
}

export default MenuInit;