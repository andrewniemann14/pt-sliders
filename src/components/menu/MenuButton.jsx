import { useEffect, useState } from 'react'
import '../../css/menu.css'

export default function MenuButton({ open, handler }) {

  return (
    // <div className="relative">
      <div class={`btn z-20 ${open && 'open'}`} data-menu="2" onClick={handler}>
        <div class="icon"></div>
      </div>
    // </div>
  )
}
