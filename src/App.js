import React from "react";

import Landing from "./pages/Landing/Landing";
import Layout from "./hoc/Layout/Layout";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Auxiliary from "./hoc/Auxiliary/Auxiliary";

const App = () => {
  return (
   <Auxiliary>
      <Layout>
     <Landing /> 
    </Layout>
    <Login/>
    <Register/>
   </Auxiliary>
  );
};

export default App;
