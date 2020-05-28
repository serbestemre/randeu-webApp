import React from "react";
import {Route, Switch, withRouter} from 'react-router-dom';
import Landing from "./pages/Landing/Landing";
import Layout from "./hoc/Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Auxiliary from "./hoc/Auxiliary/Auxiliary";
import AboutUs from './pages/AboutUs/AboutUs';
const App = () => {
  return (
   <Auxiliary>
    <Switch>
      <Layout>
      <Route path="/kullanici/giris"  component={Login} />
      <Route path="/kullanici/kayit"  component={Register} />
      <Route path="/hakkimizda"  component={AboutUs} />
      <Route path="/" exact component={Landing}/>
    </Layout>    
    </Switch>
   </Auxiliary>
  );
};

export default withRouter(App);
