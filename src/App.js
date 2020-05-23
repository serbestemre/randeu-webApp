import React from 'react';
import { Grid } from "@material-ui/core";
import NavBar from './components/Navigation/NavBar/NavBar';
import Header from './containers/Header/Header';
import Features from './containers/Features/Features';
import Sectors from './containers/Sectors/Sectors';
const App = () =>  {
    return (
      <Grid container direction="column">
        <NavBar/>
        <Header/>
        <Features/>
        <Sectors/>
      </Grid>
    );
};

export default App;
