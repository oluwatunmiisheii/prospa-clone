import React from 'react';
import MainLayout from '../../layouts/mainLayout';
import classes from './dashboard.module.scss'
import Appbutton from "./../../components/shared/button/index";

const DashBoard = () => {
  return ( 
    <MainLayout>
      <div className={classes["page-header"]}>
        <div className={classes["user-info"]}>
          <h4>Welcome back, Kathy</h4>
          <p>Here's what has been happening in the last <span>7 days</span></p>
        </div>
        <Appbutton 
          isFullWidth={false} 
          buttonText="Add a sub account" 
          buttonColour="primary" 
        />
      </div>
    </MainLayout>
  );
}
 
export default DashBoard;