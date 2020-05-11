import React from 'react';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";
import { useTheme } from "@material-ui/core/styles";


const Link = (props) => {
  const useStyles = makeStyles (() => ({
    button:{
      color:theme.palette.secondary.dark
    }
  }) );
  const theme = useTheme();

  const classes = useStyles();
  const {title} = props;
  return (
    <Button
      className={classes.button}
    >
      {title}
    </Button>

  );
};

export default Link;