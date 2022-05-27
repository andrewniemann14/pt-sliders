import { useState } from 'react'

import MenuPane from "./MenuPane";
import MenuButton from "./MenuButton";

export default function MenuController({closed}) {
  // closed === false
  console.log('MenuController loads');
  const [open, setOpen] = useState(closed)

  function handleOpen() {
    setOpen(!open);
  }

  return (
    <div>
      <MenuButton open={open} handler={handleOpen} />
      <MenuPane open={open} />
    </div>
  )
}
