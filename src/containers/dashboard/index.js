import React from 'react';
import MainLayout from '../../layouts/mainLayout';
import classes from './dashboard.module.scss'
import Appbutton from "./../../components/shared/button/index";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LinearProgress from '@material-ui/core/LinearProgress';
import CurrentAccountImage from "../../assets/images/current-account.png"
import SavingsAccountImage from "../../assets/images/savings-account.png"
import TransferImage from "../../assets/images/transfer.png"
import BankChargesImage from "../../assets/images/bank-charges.png"
import MarketingImage from "../../assets/images/marketing.png"
import InternetImage from "../../assets/images/internet.png"
import BankIcon from "../../assets/images/bank-icon.png"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
    color: theme.palette.text.secondary,
  },
}));

const DashBoard = () => {
  const styles = useStyles();
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

      {/* account types */}
      <Grid container spacing={3} className="mt-5">
        <Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            <div className={`mb-5 ${classes["account-details__top"]}`}>
              <div>
                <h4 className={classes["account-type"]}>CURRENT ACCOUNT</h4>
                <p className={classes["account-details"]}>PROVIDUS BANK - 9906533917</p>
              </div>
              <div>
                <img src={CurrentAccountImage} alt="current account image" />
              </div>
            </div>
            <div className={classes["account-details__bottom"]}>
              N814,800.<span>45</span>
            </div>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper className={styles.paper}>
            <div className={`mb-5 ${classes["account-details__top"]}`}>
              <div>
                <h4 className={classes["account-type"]}>SAVINGS ACCOUNT</h4>
                <p className={classes["account-details"]}>SUB ACCOUNT - 12346789</p>
              </div>
              <div>
                <img src={SavingsAccountImage} alt="savings account image" />
              </div>
            </div>
            <div className={classes["account-details__bottom"]}>
              N39,342.<span>45</span>
            </div>
          </Paper>
        </Grid>
      </Grid>

      {/* analytics */}
      <Grid container spacing={3} className="mt-5">
        {/* analytics summary */}
        <Grid item xs={12} md={7}>
          <Paper className={styles.paper}>
            <div className={`mb-5 ${classes["account-details__top"]}`}>
              <div>
                <h4 className={classes["account-type"]}>CURRENT ACCOUNT</h4>
                <p className={classes["account-details"]}>PROVIDUS BANK - 9906533917</p>
              </div>
              <div>
                <img src={CurrentAccountImage} alt="current account image" />
              </div>
            </div>
            <div className={classes["account-details__bottom"]}>
              N814,800.<span>45</span>
            </div>
          </Paper>
        </Grid>
        
        {/* cash outflow */}
        <Grid item xs={12} md={5}>
          <Paper className={styles.paper}>
            <h4 className={classes["analytics-title"]}>Cash Outflow</h4>

            {/* bank fees */}
            <div className={classes["cash-outflow__analytics"]}>
              <div className={classes["analytics-name__image"]}>
                <div className={classes["icon-box"]} style={{background: "#E900AE"}}>
                  <img src={BankChargesImage} />
                </div> 
                <p>Bank Fees</p>
              </div>
              <div className={classes["analytics-progress__indicator"]}>
                <p className={classes["indicator-text"]}>- N 250,000</p>
                <div className="w-100">
                  <LinearProgress variant="determinate" value={70} />
                </div>
              </div>
            </div>

            {/* internet */}
            <div className={classes["cash-outflow__analytics"]}>
              <div className={classes["analytics-name__image"]}>
                <div className={classes["icon-box"]} style={{background: "#17ECD4"}}>
                  <img src={InternetImage} />
                </div> 
                <p>Internet</p>
              </div>
              <div className={classes["analytics-progress__indicator"]}>
                <p className={classes["indicator-text"]}>- N 250,000</p>
                <div className="w-100">
                  <LinearProgress variant="determinate" value={60} />
                </div>
              </div>
            </div>

            {/* marketting */}
            <div className={classes["cash-outflow__analytics"]}>
              <div className={classes["analytics-name__image"]}>
                <div className={classes["icon-box"]} style={{background: "#C155FF"}}>
                  <img src={MarketingImage} />
                </div> 
                <p>Marketting</p>
              </div>
              <div className={classes["analytics-progress__indicator"]}>
                <p className={classes["indicator-text"]}>- N 250,000</p>
                <div className="w-100">
                  <LinearProgress variant="determinate" value={45} />
                </div>
              </div>
            </div>

            {/* Transfer */}
            <div className={classes["cash-outflow__analytics"]}>
              <div className={classes["analytics-name__image"]}>
                <div className={classes["icon-box"]} style={{background: "#00EC47"}}>
                  <img src={TransferImage} />
                </div> 
                <p>Transfer</p>
              </div>
              <div className={classes["analytics-progress__indicator"]}>
                <p className={classes["indicator-text"]}>- N 250,000</p>
                <div className="w-100">
                  <LinearProgress variant="determinate" value={30} />
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>

      {/* recent transactions */}
      <Grid container spacing={3} className="mt-5">
        <Grid item xs={12} md={12}>
          <Paper className={styles.paper}>
            <div className={`mb-3 ${classes["recent-transactions__header"]}`}>
              <div>
                <h4 className={classes["recent-transaction__title"]}>Recent transactions</h4>
              </div>
              <div>
                <img src={CurrentAccountImage} alt="current account image" />
              </div>
            </div>
            <div className={classes["transaction-list"]}>
              <div className={classes["transaction"]}>
                <div className={classes["transaction-image__title"]}>
                  <div className={classes["icon-box"]}>
                    <img src={BankIcon} alt="transaction image" />
                  </div>
                  <div>
                    <p className={classes["transaction-title"]}>Transfer Fee</p>
                    <p className={classes["transaction-date"]}>12:49 AM</p>
                  </div>
                </div>
                <div className={classes["transaction-amount"]}>
                  <h4>-N145.90</h4>
                </div>
              </div>
              
              <div className={classes["transaction"]}>
                <div className={classes["transaction-image__title"]}>
                  <div className={classes["icon-box"]}>
                    <img src={BankIcon} alt="transaction image" />
                  </div>
                  <div>
                    <p className={classes["transaction-title"]}>Adam Chapman</p>
                    <p className={classes["transaction-date"]}>12:49 AM</p>
                  </div>
                </div>
                <div className={classes["transaction-amount"]}>
                  <h4>-N145.90</h4>
                </div>
              </div>
              
              <div className={classes["transaction"]}>
                <div className={classes["transaction-image__title"]}>
                  <div className={classes["icon-box"]}>
                    <img src={BankIcon} alt="transaction image" />
                  </div>
                  <div>
                    <p className={classes["transaction-title"]}>Adam Chapman</p>
                    <p className={classes["transaction-date"]}>12:49 AM</p>
                  </div>
                </div>
                <div className={classes["transaction-amount"]}>
                  <h4>-N145.90</h4>
                </div>
              </div>
              
              <div className={classes["transaction"]}>
                <div className={classes["transaction-image__title"]}>
                  <div className={classes["icon-box"]}>
                    <img src={BankIcon} alt="transaction image" />
                  </div>
                  <div>
                    <p className={classes["transaction-title"]}>Adam Chapman</p>
                    <p className={classes["transaction-date"]}>12:49 AM</p>
                  </div>
                </div>
                <div className={classes["transaction-amount"]}>
                  <h4>-N145.90</h4>
                </div>
              </div>
            </div>
          </Paper>
        </Grid>
      </Grid>
    </MainLayout>
  );
}
 
export default DashBoard;