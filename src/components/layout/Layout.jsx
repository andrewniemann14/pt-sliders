import { useState } from 'react'

import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

export default function Layout() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 480;

  return (
    width < breakpoint ?
    <MobileContainer />
    :
    <DesktopContainer />
  )
}