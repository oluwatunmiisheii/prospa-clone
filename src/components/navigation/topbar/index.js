import React from 'react';
import classes from './topbar.module.scss'
import AvatarImage from "../../../assets/images/avatar-img.png";

export default function TopBar() {
  return (
   <div className={classes["topbar__wrapper"]}>
     <h3 className={classes["current-page__name"]}>Dashboard</h3>
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