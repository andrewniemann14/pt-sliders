import { useState } from 'react'

import MenuPane from "./MenuPane";
import MenuButton from "./MenuButton";

type Props = {
  closed: boolean
}

const MenuController = ({closed}: Props) => {
  // closed === true
  const [open, setOpen] = useState<boolean>(!closed)

  const handleOpen = (): void => {
    setOpen(!open);
  }

  return (
    <div>
      <MenuButton open={open} handler={handleOpen} />
      <MenuPane open={open} />
    </div>
  )
}

export default MenuController