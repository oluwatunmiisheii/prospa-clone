import React from 'react';
import classes from './sidebar.module.scss';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import TransferAlt from "../../../assets/images/transfer-alt.png";
import InvoiceImage from "../../../assets/images/invoice.png";
import ManagementImage from "../../../assets/images/management.png";
import AccountPinkImage from "../../../assets/images/account-pink.png";

const SideBarContent = ({extraClass}) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return ( 
    <div className={`${classes["sidebar-wrapper"]} ${extraClass}`}>
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
     <div className={classes["sidebar-links"]}>
        <div className={` ${classes["link"]} ${classes["active-link"]}`}>
          <img src={AccountPinkImage} />
          Accounts
        </div>
        <div className={classes["link"]}>
          <img src={TransferAlt} />
          Transfer
        </div>
        <div className={classes["link"]}>
          <img src={InvoiceImage} />
          Invoice
        </div>
        <div className={classes["link"]}>
          <img src={ManagementImage} />
          Management
        </div>
        <div className={classes["link"]}>
          <img src={ManagementImage} />
          Security
        </div>
        <div className={classes["link"]}>
          <img src={ManagementImage} />
          Support
        </div>
     </div>
     <div className={classes["sidebar-footer"]}>
       <img src="https://getprospa.com/static/icons/prospa-logo3.svg" />
     </div>
    </div>
    
  );
}
 
export default SideBarContent;