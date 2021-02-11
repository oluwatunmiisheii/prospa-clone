import React from 'react';
import classes from "./auth.module.scss"
import Logo from './../../components/vectors/logo';
import AuthStoryImage from "../../assets/images/auth-img.png"

const AuthLayout = ({ children }) => {
  const styles = {
    display: "flex",
    justifyContent: "center",
    maxWidth: "100%",
    position: "absolute",
    width: "98%",
    padding: "7px 5px 5px",
    alignSelf: "center",
    zIndex: 99,
  }
  const indicatorStyle = {
    height: "2px",
    maxWwidth: "100%",
    background: "rgb(85, 85, 85)",
    margin: "2px",
    borderRadius: "2px",
    transition: "opacity 400ms ease-in-out 0s",
    width: "20%",
    opacity: 1
  }
  
  return (
    <div className={classes["auth-layout__wrapper"]}>
      <div className={classes["auth-layout__sidebar-left"]}>
        <Logo />
        <div className={classes["auth-stories__wrapper"]}>
          <div 
            style={{display: "flex", flexDirection: "column", width: '360px', height: '640px', position: "relative"}} 
            className="w-100 h-100"
          >
            <div style={styles}>
              <div style={indicatorStyle}>
                <div 
                  style={{background: "rgb(255, 255, 255)", height: "100%", maxWidth: "100%", borderRadius: "2px", transformOrigin: "left center", backfaceVisibility: "hidden", perspective: "1000px", width: "100%"}}
                >
                </div>
              </div>
              <div style={indicatorStyle}>
                <div 
                  style={{background: "rgb(255, 255, 255)", height: "100%", maxWidth: "100%", borderRadius: "2px", transformOrigin: "left center", backfaceVisibility: "hidden", perspective: "1000px", width: "100%"}}
                >
                </div>
              </div>
              <div style={indicatorStyle}></div>
              <div style={indicatorStyle}></div>
              <div style={indicatorStyle}></div>
            </div>
            
            <div className={classes["auth-stories__list"]}>
              <h1 className={classes["auth-stories__list-title"]}>Create multiple sub-account</h1>
              <p className={classes["auth-stories__list-description"]}>
              Organise your business finances easily
              with multiple accounts. No limits
              </p>
              <div className={classes["auth-stories__list-image"]}>
                <img src={AuthStoryImage} />
              </div>
            </div>
          </div>
        </div>
        <div className={classes["auth-sidebar__footer"]}>
          {`© ${new Date().getFullYear()} Prospa Inc`}
        </div>
      </div>
      <div className={classes["auth-layout__form"]}>
        {children}
      </div>
    </div>
  );
}
export default AuthLayout;
