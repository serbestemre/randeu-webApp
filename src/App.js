import React from 'react';
import { Grid } from "@material-ui/core";
import NavBar from './components/Navigation/NavBar/NavBar';
import Header from './containers/Header/Header';
const App = () =>  {
    return (
      <Grid container direction="column">
        <NavBar/>
        <Header/>
      </Grid>
    );
};

export default App;
