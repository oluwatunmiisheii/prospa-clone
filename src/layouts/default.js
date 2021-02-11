import React from 'react';
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import SideBar from './../components/navigation/sidebar/index';

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
const DefaultLayout = ({children}) => {
  const styles = useStyles();
  return ( 
    <Grid container className={styles.root} spacing={2}>
      <Grid item xs={12} md={3}>
        <SideBar />
      </Grid>
      <Grid item xs={12} md={9}>
        {children}
      </Grid>
    </Grid>
  );
}
 
export default DefaultLayout;