import React from "react";

import Header from "../../containers/Header/Header";
import Features from "../../containers/Features/Features";
import Sectors from "../../containers/Sectors/Sectors";
import Auxiliary from "../../hoc/Auxiliary/Auxiliary";

const landing = () => {
  return (
    <Auxiliary>
      <Header />
      <Features />
      <Sectors />
    </Auxiliary>
  );
};

export default landing;
