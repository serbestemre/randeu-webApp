import React, {useEffect, useCallback} from "react";
import {Route, Switch, withRouter} from 'react-router-dom';
import {useDispatch, useSelector  } from 'react-redux';
import Landing from "./pages/Landing/Landing";
import Layout from "./hoc/Layout/Layout";
import Login from "./pages/Login/Login";
import Logout  from "./containers/Logout/Logout";
import UserProfile from "./pages/UserProfile/UserProfile";
import Register from "./pages/Register/Register";
import Auxiliary from "./hoc/Auxiliary/Auxiliary";
import AboutUs from './pages/AboutUs/AboutUs';
import Redirection from './containers/Redirection/Redirection';
import ActivateUser from './containers/ActivateUser/ActivateUser';
import SendActivationLink from './containers/SendActivationLink/SendActivationLink'
import AppointmentSearch from './pages/AppointmentSearch/AppointmentSearch';
import * as actions  from "./store/actions/index";

const App = (props) => {

  const dispatch = useDispatch();

  const isAuthenticated = useSelector((state) => {
    return state.auth.token;
  });

  const onAuthCheckState = useCallback(
    () => dispatch(actions.authCheckState()),
    [dispatch]
  );

  useEffect(() => {
    onAuthCheckState()
  }, [onAuthCheckState])

let authRoutes;

if(isAuthenticated){
  authRoutes = (
  <div>
      <Route path="/kullanici/profil"  component={UserProfile} />
      <Route path="/cikis"  component={Logout} />
  </div>
  )
}

  return (
   <Auxiliary>
    <Switch>
      <Layout>
      <Route path="/kullanici/giris"  component={Login} />
      {authRoutes}
      <Route path="/kullanici/kayit"  component={Register} />
      <Route path="/redirecting"  render ={(props) => <Redirection redirectText={props.location.state ? props.location.state.redirectText : "" } {...props} />} />
      <Route path="/hakkimizda"  component={AboutUs} />
      <Route path="/ara/randevu"  render= {(props) => <AppointmentSearch searchedKeyword={props.location.state ? props.location.state.searchedKeyword:"null prop geldi"} {...props}/>} />
      <Route path="/kullanici/aktivasyon"  component={SendActivationLink} />
      <Route path="/account/activate/:uuid" component={ActivateUser} />
      <Route path="/" exact component={Landing}/>
    </Layout>    
    </Switch>
   </Auxiliary>
  );
};

export default withRouter(App);
