import React from "react";
import { useSelector } from "react-redux";
import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Avatar from "@material-ui/core/Avatar";
import ReactScheduler from "../../containers/ReactScheduler/ReactScheduler"
import UserAvatar from "../../assets/images/user-avatar.png"
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
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
}));

const userProfile = (props) => {
  const classes = useStyles();

  const userProfile = useSelector((state) => {
    return state.auth.userProfile;
  });

  // const appointments = [
  //   { title: 'Mail New Leads for Follow Up', startDate: '2020-06-17T10:00' },
  //   { title: 'Product Meeting', startDate: '2019-06-23T10:30', endDate: '2019-06-23T11:30' },
  //   { title: 'Send Territory Sales Breakdown', startDate: '2019-06-23T12:35' },
  // ];

  return (
      <Grid
      container
      direction="row"
      justify="flex-start"
      style={{ paddingTop: "2%", paddingLeft: "2%" }}
    >
      <Grid item>
        <Grid container direction="row">
          <Grid item md={5}>
            <Avatar
              alt="Remy Sharp"
              src={UserAvatar}
              className={classes.large}
            />
          </Grid>
          <Grid item >
            <Typography gutterBottom component="h1" variant="h5">
              {userProfile.fullName.toUpperCase()}
            </Typography>
</Grid><Grid item>
            <Typography gutterBottom component="h1" variant="h5">
              {userProfile.email}
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <ReactScheduler appointments={userProfile&&userProfile.appointments}/>
      </Grid>
    </Grid>

  );
};

export default userProfile;
