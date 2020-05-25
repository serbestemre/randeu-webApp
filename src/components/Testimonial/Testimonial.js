import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(20),
      height: theme.spacing(20),
    },
  }));
  
  
  const testimonial = props => {
      const {businessImage, text, businessName, businessOwner} = props;
      
      const classes = useStyles();
    return (
        <Grid container item direction="row" md={4}>
          <Grid item md={5} align="center">
            {" "}
            <Avatar
              alt="Remy Sharp"
              src={businessImage}
              className={classes.large}
            />
          </Grid>
          <Grid container item md={6} direction="column" justify="center">
              <Grid item>
    <Typography variant="body2" gutterBottom>{text}</Typography>
              </Grid>
              <Grid item>
              <Typography variant="h6" >{businessName}</Typography>
              </Grid>
              <Grid item>
              <Typography variant="subtitle2">{businessOwner}</Typography>
              </Grid>
          </Grid>
        </Grid>
    )
}

export default testimonial;