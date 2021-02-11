import React from 'react';
import classes from './sidebar.module.scss';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const SideBar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return ( 
    <div className={classes["sidebar-wrapper"]}>
     <div className={classes["business-info"]}>
      <Button 
        aria-controls="simple-menu" 
        aria-haspopup="true" 
        onClick={handleClick} 
        fullWidth={true} 
        disableFocusRipple={true}
        disableRipple={true}
        style={{padding: 0}}
      >
        <div className={classes["business-info__inner"]}>
          <div className="w-80 d-flex" style={{alignItems: 'center'}}>
            <div className={classes["user-initials"]}>BN</div>
            <div className="d-flex flex-column">
              <div className={classes["business-name"]}>Clayvant Inc</div>
              <div className={classes["business-category"]}>Manage account</div>
            </div>
          </div>
          <div>
            <img src="https://getprospa.com/static/icons/arrow_down.svg" alt="dropdown-toggle"/>
          </div>
        </div>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        style={{ width: "242px"}}
      >
        <div style={{borderBottom: '1px solid rgb(241 241 241)'}}>
          <MenuItem onClick={handleClose} style={{color: "#8397ab", fontSize: '14px'}}>Clayvant Inc</MenuItem>
        </div>
        <div style={{borderBottom: '1px solid rgb(241 241 241)'}}>
          <MenuItem onClick={handleClose} style={{color: "#8397ab", fontSize: '14px'}}>Business Name 2</MenuItem>
        </div>
        <MenuItem onClick={handleClose} style={{color: "#8397ab", fontSize: '14px'}}>Business NAme 3</MenuItem>
      </Menu>
     </div>
    </div>
  );
}
 
export default SideBar;