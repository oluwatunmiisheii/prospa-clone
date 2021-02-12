import React from 'react';
import SideBarContent from './sidebarContent';
import { isMobile } from 'react-device-detect';
const  DesktopSideBar = () => {
  return ( 
    <SideBarContent extraClass={isMobile ? 'w-0 d-none' : ''} />
   );
}
 
export default DesktopSideBar;