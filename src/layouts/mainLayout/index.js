import React, {useState} from 'react';
import classes from './mainLayout.module.scss'
import TopBar from './../../components/navigation/topbar/index';
import MobileSidebar from './../../components/navigation/sidebar/mobileSidebar';
import DesktopSideBar from '../../components/navigation/sidebar/desktopSidebar';
import { isMobile } from "react-device-detect";

const MainLayout = ({children}) => {
  const [isOpen, setIsOpen] = useState(false);
  return ( 
    <MobileSidebar
      isOpen={isOpen}
      setIsOpen={() => setIsOpen(true)}
    >
      <div className={classes["navigation-wrapper"]}>
        <DesktopSideBar />
        <div className={classes["content-body"]}>
          <TopBar toggleSidebar={() => setIsOpen(true)} />
          <div className={classes["main-content"]}>
            {children}
          </div>
        </div>
      </div>
    </MobileSidebar>
  );
}
 
export default MainLayout;