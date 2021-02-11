import React from 'react';
import classes from './mainLayout.module.scss'
import { makeStyles } from "@material-ui/core/styles";
import SideBar from './../../components/navigation/sidebar/index';
import TopBar from './../../components/navigation/topbar/index';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  control: {
    padding: theme.spacing(2),
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));
const MainLayout = ({children}) => {
  return ( 
    <div className={classes["navigation-wrapper"]}>
      <>
        <SideBar />
      </>
      <div className={classes["content-body"]}>
        <TopBar />
        <div className={classes["main-content"]}>
          {children}
        </div>
      </div>
    </div>
  );
}
 
export default MainLayout;