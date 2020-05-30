import React from 'react';
import { Grid, Typography } from "@material-ui/core";
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';


const FeatureCard = (props) => {

  const {title, contentText, icon} = props;

  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor:"#fff",
      padding:"16px",
      color: theme.palette.secondary.main,
      fontSize: "40px"
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    avatar: {
      backgroundColor: "transparent",
    },
  }));

  const classes = useStyles();

  return (
    <Grid container item justify="center"  xs={12} sm={10} md={3} xl={4}>
      <Card className={classes.root} elevation={0}>
        <CardHeader
          avatar={
            <Avatar className={classes.avatar}>{icon}</Avatar>
          }
          title={<Typography variant={"h5"} component="h1">{title} </Typography>}
          color="textSecondary"
        />
        <CardContent>
          <Typography variant="body1" color="textPrimary" component="p">
            {contentText}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default FeatureCard;