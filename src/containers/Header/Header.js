import React from "react";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TabBar from "../../components/TabBar/TabBar";
import HeaderImage from "../../assets/images/header3.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${HeaderImage})`,
    // backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "92vh",
    color: "white",
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
      justify={"center"}
      alignItems={"center"}
      alignContent={"center"}
    >
      <Grid
        container
        item
        direction={"column"}
        justify={"center"}
        alignItems={"flex-start"}
        style={{ paddingLeft: "10%" }}
      >
        <Typography variant="h1" gutterBottom style={{ display: "block" }}>
         Buraya Randeu Slogan gelecek
        </Typography>

        <Typography variant="h2" gutterBottom>
          Alt başlık gelecek
        </Typography>
      </Grid>

      <Grid container justify={"center"} alignItems={"center"}>
        <Grid item xs={10} sm={10} md={6}>
          <TabBar />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Header;
