import React from 'react';
import classes from './topbar.module.scss'
import AvatarImage from "../../../assets/images/avatar-img.png";
import { isMobile } from 'react-device-detect';
import MenuIcon from '@material-ui/icons/Menu';

export default function TopBar({ toggleSidebar }) {
  return (
   <div className={classes["topbar__wrapper"]}>
     {isMobile ? (
       <span onClick={toggleSidebar}  style={{cursor: 'pointer'}}>
          <MenuIcon />
       </span>
       ) : (
       <h3 className={classes["current-page__name"]}>Dashboard</h3>
     )}
     <div className={classes["topbar-content__right"]}>
       <div 
          style={{background: '#D2D9E1', padding: '8px', display:'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '6px', }}
        >
          <img src="https://getprospa.com/static/icons/bell.svg" height="18" />
       </div>
        <div className="ml-4">
          <img src={AvatarImage}  style={{ height:'40px', width: '40px', objectFit: 'cover', borderRadius: '100%' }}/>
        </div>
     </div>
   </div>
  );
}