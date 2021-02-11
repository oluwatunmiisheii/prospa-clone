import React, { useEffect } from "react";
import AuthLayout from "../../../layouts/auth/index";
import { Link } from "react-router-dom";
import classes from "../auth.module.scss";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Appbutton from "./../../../components/shared/button/index";
import MenuItem from '@material-ui/core/MenuItem';
import { dialCodes } from './../../../utils/countriesDialCode';
import BackButtonIcon from './../../../components/vectors/backButton';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { useHistory } from "react-router-dom";
import CheckIcon from './../../../components/vectors/checkIcon';

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

const SignUp = () => {
  const styles = useStyles();
  const [code, setCode] = React.useState("+234");
  const [formStep, setFormStep] = React.useState("stepOne")
  const [formHeader, setFormHeader] = React.useState("Create your account")
  const [expanded, setExpanded] = React.useState(false);
  const [activePanel, setActivePanel] = React.useState("panel1")
  const history = useHistory();

  const handleAccordionChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    setActivePanel(panel)
  };

  const handleCodeChange = (event) => {
    setCode(event.target.value);
  };

  const changeFormStep = (step) => {
    setFormStep(step)
    if(step === "stepTwo") {
      setFormHeader("Open a new business account");
    }
    if(step === "stepOne") {
      setFormHeader("Create your account");
    }
  }

  useEffect(() => {
    console.log('here')
    handleAccordionChange('panel2')
  }, [formStep, activePanel])

  return ( 
    <AuthLayout>
      <div className={`flexed-between ${classes["auth__cta"]}`}>
        <div onClick={() => changeFormStep("stepOne")} style={{cursor: "pointer"}}> 
          {formStep !== "stepOne" && <BackButtonIcon /> }
        </div>
        <div>
          Already a member? <span><Link to="/signin">Sign In</Link></span>
        </div>
      </div>
      <div className={classes["auth__wrapper"]}>
        <Grid container className={styles.root} container justify="center" spacing={2}>
          <Grid item xs={12} md={5}>
              {/* form description */}
              <h3 className={classes["auth__form-header"]}>{formHeader}</h3>
              <p className={classes["auth__form-description"]}>
                A short decsription about account types
              </p>

            {formStep === "stepOne" ? (
              <>
              {/* form body */}
              <form className={classes["auth__form"]}>
                {/* first name */}
                <div className={classes["input-field__wrapper"]}>
                  <TextField 
                    id="first-name" 
                    label="First name" 
                    variant="filled" 
                    className="w-100" 
                  />
                </div>

                {/* last name */}
                <div className={classes["input-field__wrapper"]}>
                  <TextField 
                    id="last-name" 
                    label="Last name" 
                    variant="filled" 
                    className="w-100" 
                  />
                </div>

                {/* phone number */}
                <div className={classes["input-field__wrapper"]}>
                  <Grid container spacing={3}>
                    <Grid item xs={4}>
                      <TextField
                        id="phone-number"
                        select
                        label="country"
                        value={code}
                        onChange={handleCodeChange}
                        variant="filled"
                        className="w-100" 
                      >
                        {dialCodes.map((country) => (
                          <MenuItem key={country.dail_code} value={country.dail_code}>
                            {country.dail_code}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item xs={8}>
                      <TextField 
                        id="filled-basic" 
                        label="Mobile number" 
                        variant="filled" 
                        className="w-100" 
                      />
                    </Grid>
                  </Grid>
                </div>

                {/* email */}
                <div className={classes["input-field__wrapper"]}>
                  <TextField 
                    id="filled-basic" 
                    label="Email" 
                    type="email"
                    variant="filled" 
                    className="w-100" 
                  />
                </div>
                
                <Appbutton 
                  isFullWidth={true} 
                  buttonText="Next" 
                  buttonColour="primary" 
                  buttonClicked={() => changeFormStep("stepTwo")}
                />
              </form>
              </>
            ) : (
              <div className={classes["select-business__type-wrapper"]}>
                <Accordion 
                  expanded={expanded === 'panel1'} 
                  onChange={handleAccordionChange('panel1')}
                  className={`my-3 ${activePanel === "panel1" ? "border-primary" : ""}`}
                >
                  <AccordionSummary
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                  > 
                    <div className={classes["select-business__type"]}>
                      <span className={`${activePanel === "panel1" ? "border-primary bg-primary" : ""} ${classes["select-indicator"]}`}></span>
                      <h3 className={classes["business-type"]}>I have a registered business / <br /> charity with CAC</h3>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={classes["business-type__description"]}>
                      As a registered business, you'll get:
                      <ul>
                        <li>
                          <span className={classes["business-type__description-icon"]}> <CheckIcon /> </span> 
                          Account in your business name
                        </li>
                        <li>
                          <span className={classes["business-type__description-icon"]}> <CheckIcon /> </span> 
                          Send and receive transfers from all Nigerian banks
                        </li>
                        <li>
                          <span className={classes["business-type__description-icon"]}> <CheckIcon /> </span> 
                          Tools for managing your business
                        </li>
                      </ul>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion 
                  expanded={expanded === 'panel2'} 
                  onChange={handleAccordionChange('panel2')}
                  className={`my-3 ${activePanel === "panel2" ? "border-primary" : ""}`}
                >
                  <AccordionSummary
                    aria-controls="panel2bh-content"
                    id="panel2bh-header"
                  >
                     <div className={classes["select-business__type"]}>
                     <span className={`${activePanel === "panel2" ? "border-primary bg-primary" : ""} ${classes["select-indicator"]}`}></span>
                      <h3 className={classes["business-type"]}>My business is not yet registered, I would like to register</h3>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                    <div className={classes["business-type__description"]}>
                      What you will get:
                      <ul>
                        <li>
                          <span className={classes["business-type__description-icon"]}> <CheckIcon /> </span> 
                          Registered business name with the CAC & certificate
                        </li>
                        <li>
                          <span className={classes["business-type__description-icon"]}> <CheckIcon /> </span> 
                          Tax identification number
                        </li>
                        <li>
                          <span className={classes["business-type__description-icon"]}> <CheckIcon /> </span> 
                          Your account will be automatically opened on completion
                        </li>
                      </ul>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Accordion 
                  expanded={expanded === 'panel3'} 
                  onChange={handleAccordionChange('panel3')}
                  className={`my-3 ${activePanel === "panel3" ? "border-primary" : ""}`}
                >
                  <AccordionSummary
                    aria-controls="panel3bh-content"
                    id="panel3bh-header"
                  >
                    <div className={classes["select-business__type"]}>
                    <span className={`${activePanel === "panel3" ? "border-primary bg-primary" : ""} ${classes["select-indicator"]}`}></span>
                      <h3 className={classes["business-type"]}>I'm a freelancer, I do business in my personal name</h3>
                    </div>
                  </AccordionSummary>
                  <AccordionDetails>
                  <div className={classes["business-type__description"]}>
                      As a freelancer you’ll get:
                      <ul>
                        <li>
                          <span className={classes["business-type__description-icon"]}> <CheckIcon /> </span> 
                          Account in your personal name
                        </li>
                        <li>
                          <span className={classes["business-type__description-icon"]}> <CheckIcon /> </span> 
                          Send and receive transfers from all Nigerian banks
                        </li>
                        <li>
                          <span className={classes["business-type__description-icon"]}> <CheckIcon /> </span> 
                          Tools for managing your business
                        </li>
                      </ul>
                    </div>
                  </AccordionDetails>
                </Accordion>

                <Appbutton 
                  isFullWidth={true} 
                  buttonText="Next" 
                  buttonColour="primary" 
                  buttonClicked={() => history.push('/dashboard')}
                />
              </div>
            )}
          </Grid>
        </Grid>
      </div>
    </AuthLayout>
  );
}
 
export default SignUp;