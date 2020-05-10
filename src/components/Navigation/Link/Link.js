import React from 'react';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/styles";

const useStyles = makeStyles (() => ({
  button:{
    color:"white"
  }
}) );


const Link = (props) => {
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