import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TabBar from '../../components/TabBar/TabBar'
import HeaderImage from "../../assets/images/header3.jpg";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.4)), url(${HeaderImage})`,
   // backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "100vh",
    position: "absolute",
    zIndex:"-1"
  },
  padding: {
    paddingTop: "16px",
  },
}));

const Header = (props) => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.root}
      item
      direction={"row"}
      justify={"flex-start"}
      alignItems={"center"}
    >
      <Grid
        container
        direction={"row"}
        alignItems={"center"}
        stlye={{ position: "relative" }}
      >
        <Grid
          item
          xl={12}
          style={{ position: "absolute", left: "70px", top: "250px" }}
        >
          <Typography component="span" style={{color:"white"}} variant="h1">
            Relecota Buraya slogan gelecek
          </Typography>
        </Grid>
        <Grid
          item
          xl={4}
          style={{ position: "absolute", left: "70px", top: "400px" }}
        >
          <Typography variant="h2"  style={{color:"white"}}>Alt başlık gelecek</Typography>
        </Grid>
      </Grid>

      <Grid container justify={"center"} alignItems={"center"}>
        <Grid item xs={8} sm={6}>
          <TabBar />
        </Grid>
      </Grid>
    </Grid>
  )
};

export default Header;