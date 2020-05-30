import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TabBar from "../../components/TabBar/TabBar";
import HeaderImage from "../../assets/images/header3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.4)), url(${HeaderImage})`,
    // backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "92vh",
  },
  padding: {
    paddingTop: "16px",
  },
  mainTitle: {
    position: "absolute",
    left: "70px",
    top: "150px",
    [theme.breakpoints.down("md")]: {
      fontSize: "70px",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "50px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
  },
  subTitle: {
    position: "absolute",
    left: "70px",
    top: "300px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.down("xs")]: {
      display: "none",
    },
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
        <Grid item md={10}>
          <Typography
            className={classes.mainTitle}
            component="span"
            style={{ color: "white" }}
            variant="h1"
          >
            Relecota Buraya slogan gelecek
          </Typography>
        </Grid>
        <Grid item xl={4}>
          <Typography
            className={classes.subTitle}
            variant="h2"
            style={{ color: "white" }}
          >
            Alt başlık gelecek
          </Typography>
        </Grid>
      </Grid>

      <Grid container justify={"center"} alignItems={"center"}>
        <Grid item xs={10} sm={10} md={8}>
          <TabBar />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
