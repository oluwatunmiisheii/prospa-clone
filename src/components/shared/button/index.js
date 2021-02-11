import React from "react";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Button from "@material-ui/core/Button";

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#fa4a84",
    },
  },
});

const Appbutton = (
  {
    isFullWidth, 
    buttonText, 
    buttonColour, 
    buttonClicked
  }
) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
         variant="contained" 
         color={buttonColour}
         disableElevation 
         fullWidth={isFullWidth}
         size="large"
         onClick={buttonClicked}
        >
        {buttonText}
      </Button>
    </ThemeProvider>
  );
}
 
export default Appbutton