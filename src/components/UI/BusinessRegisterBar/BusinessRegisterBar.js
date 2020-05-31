import React from 'react';
import { Link, withRouter } from "react-router-dom";
import { Grid, Typography,Button } from "@material-ui/core";
import {useTheme} from "@material-ui/core/styles";

const businessRegisterBar = (props) => {
  const {title, paragraph} = props;
  const theme = useTheme();
return (
  <Grid
    container
    direction={"column"}
    alignItems="center"
    style={{
      color: theme.palette.secondary.main,
      backgroundColor:"#e0f7fa",
      paddingTop: "50px",
      paddingBottom: "50px",
      textDecoration:"italic"
    }}
    justify={"center"}
  >
    <Typography gutterBottom variant="h2">
      {title}
    </Typography>
      <Grid container direction="column" alignItems="center" justify="center" item  spacing={1} xs={12} md={8} xl={6}>
        <Grid item ><Typography gutterBottom component="h2" variant="h5" color="textPrimary" align="center">
          {paragraph}
        </Typography></Grid>
        <Grid item ><Button variant="contained" component={Link} to="/isyeri/kayit" size="large" color="secondary">
          Hemen Kayıt Ol
        </Button></Grid>
        
      </Grid>
    {/* <Grid item style={{borderBottom:"1px solid black", width:"90%", padding:"0 %5 0", paddingTop:"25px"}}></Grid> */}
  </Grid>
);
};

export default businessRegisterBar;

