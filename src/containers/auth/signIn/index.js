import React from "react";
import AuthLayout from "../../../layouts/auth/index";
import { Link } from "react-router-dom";
import classes from "../auth.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Appbutton from "./../../../components/shared/button/index";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

const SignIn = () => {
  const styles = useStyles();
  const history = useHistory();
  return ( 
    <AuthLayout>
      <div className={classes["auth__cta"]}>
        Dont have an account? <span><Link to="/signup">Sign Up</Link></span>
      </div>
      <div className={classes["auth__wrapper"]}>
        <Grid container className={styles.root} justify="center" spacing={2}>
          <Grid item xs={12} md={5}>
            <h3 className={classes["auth__form-header"]}>Welcome back to prospa</h3>
            <p className={classes["auth__form-description"]}>
              An account, with powerful, personalised tools all in <br /> one place
            </p>
            {/* form body */}
            <form className={classes["auth__form"]}>
              {/* email */}
              <div className={classes["input-field__wrapper"]}>
                <TextField 
                  id="filled-basic" 
                  label="Email Address" 
                  variant="filled" 
                  type="email" 
                  className="w-100" 
                />
              </div>

              {/* password */}
              <div className={classes["input-field__wrapper"]}>
                <TextField 
                  id="filled-basic" 
                  label="Enter Password" 
                  variant="filled" 
                  type="password"
                  className="w-100" 
                />
              </div>
              
              <Appbutton 
                isFullWidth={true} 
                buttonText="Next" buttonColour="primary" 
                buttonClicked={() => history.push('/dashboard')}
              />
            </form>
          </Grid>
        </Grid>
      </div>
    </AuthLayout>
  );
}
 
export default SignIn;