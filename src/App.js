import React from "react";

import Landing from "./pages/Landing/Landing";
import Layout from "./hoc/Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Auxiliary from "./hoc/Auxiliary/Auxiliary";
import AboutUs from './pages/AboutUs/AboutUs';
const App = () => {
  return (
   <Auxiliary>
      <Layout>
     {/* <Landing />  */}
     <AboutUs/>
    </Layout>
    {/* <Login/>
    <Register/> */}
    
   </Auxiliary>
  );
};

export default App;
