import React, {useEffect, useState, useCallback} from "react";
import {useDispatch, useSelector  } from 'react-redux';
import axios from '../../axios';

import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import TabBar from "../../components/TabBar/TabBar";
import HeaderImage from "../../assets/images/header3.jpg";
import * as headerActions from '../../store/actions/index'

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundImage: `linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(${HeaderImage})`,
    // backgroundImage: `url(${HeaderImage})`,
    backgroundPosition: "top center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    height: "92vh",
    color: "white",
  },
}));

const header = (props) => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const businessTypesList = useSelector(state => {
    return state.businessTypesList
  });

  const servicesList = useSelector(state => {
    return state.servicesList
  });


  const businessList = useSelector(state => {
    return state.businessList
  })

 

  const onInitBusinessTypesList =useCallback(() =>dispatch(headerActions.initBusinessTypesList()), [dispatch]);
  const  onInitServicesList =useCallback(() => dispatch(headerActions.initServicesList()), [dispatch]);
  const onInitBusinessList = useCallback(() => dispatch(headerActions.initBusinessList()), [dispatch]);


  useEffect(() => {
    onInitBusinessTypesList();
  },[onInitBusinessTypesList]);

  useEffect(() => {
    onInitServicesList();
  },[onInitServicesList]);

  useEffect(() => {
    onInitBusinessList();
  },[onInitBusinessList]);

  return (
    <Grid
      container
      className={classes.root}
      item
      direction={"row"}
      justify={"center"}
      alignItems={"center"}
      alignContent={"center"}
    >
      <Grid
        container
        item
        direction={"column"}
        justify={"center"}
        alignItems={"flex-start"}
        style={{ paddingLeft: "10%" }}
      >
        <Typography variant="h1" gutterBottom style={{ display: "block" }}>
         Buraya Randeu Slogan gelecek
        </Typography>

        <Typography variant="h2" gutterBottom>
          Alt başlık gelecek
        </Typography>
      </Grid>

      <Grid container justify={"center"} alignItems={"center"}>
        <Grid item xs={10} sm={10} md={6}>
          <TabBar businessTypes={businessTypesList} services={servicesList} businesses={businessList} />
        </Grid>
      </Grid>
    </Grid>
  );
};

export default header;
