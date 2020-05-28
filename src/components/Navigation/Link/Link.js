import React from "react";
import { NavLink } from "react-router-dom";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";

const Link = (props) => {
  const useStyles = makeStyles(() => ({
    button: {
      color: theme.palette.secondary.dark,
    },
  }));
  const theme = useTheme();

  const classes = useStyles();
  const { key, title, target, exact } = props;
  return (
    <NavLink key={key} to={props.target} exact={props.exact}>
      <Button className={classes.button}>{title}</Button>
    </NavLink>
  );
};

export default Link;
