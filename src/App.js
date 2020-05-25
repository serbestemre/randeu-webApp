import React from 'react';
import { Grid } from "@material-ui/core";
import NavBar from './components/Navigation/NavBar/NavBar';
import Header from './containers/Header/Header';
import Features from './containers/Features/Features';
import Sectors from './containers/Sectors/Sectors';
import Footer from './containers/Footer/Footer';

const App = () =>  {
    return (
      <Grid container direction="column">
        <NavBar/>
        <Header/>
        <Features/>
        <Sectors/>
        <Footer/> 
      </Grid>
    );
};

export default App;
