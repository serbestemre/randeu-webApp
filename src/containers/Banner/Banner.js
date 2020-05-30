import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import HeaderImage from "../../assets/images/header3.jpg";

const useStyles = makeStyles(() => ({
  root: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.4)), url(${HeaderImage})`,
    // backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "30vh",
  },
  padding: {
    paddingTop: "16px",
  },
}));

const banner = (props) => {
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
      <Grid container justify={"center"} alignItems={"center"}>
          <Typography component="span" style={{ color: "white" }} variant="h2">
            Page Title Prop
          </Typography>{" "}
      </Grid>
    </Grid>
  );
};

export default banner;
