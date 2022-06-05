import { useState } from 'react'

import DesktopContainer from './DesktopContainer';
import MobileContainer from './MobileContainer';

const Layout = () => {
  const [width, setWidth] = useState<number>(window.innerWidth);
  const breakpoint = 480;

  return (
    width < breakpoint ?
    <MobileContainer />
    :
    <DesktopContainer />
  )
}

export default Layout