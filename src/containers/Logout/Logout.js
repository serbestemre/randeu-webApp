import React, { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";

import * as authActions from "../../store/actions/index";

const logout = (props) => {
  const dispatch = useDispatch();

  const onLogout = () => dispatch(authActions.authLogout());

  useEffect(() => {
    onLogout();
  }, [onLogout]);
  return <Redirect to="/" />;
};

export default logout;
