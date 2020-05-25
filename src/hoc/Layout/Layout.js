import React from "react";
import { Grid } from "@material-ui/core";
import NavBar from "../../components/Navigation/NavBar/NavBar";
import Footer from "../../containers/Footer/Footer";

const layout = (props) => {
  return (
    <Grid container direction="column">
      <NavBar />
      {props.children}
      <Footer />
    </Grid>
  );
};

export default layout;
