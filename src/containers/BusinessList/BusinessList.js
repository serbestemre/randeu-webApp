import React, {useEffect, useCallback} from "react";
import {useDispatch, useSelector  } from 'react-redux';
import { Grid } from "@material-ui/core";
import BusinessCard from '../../components/Card/BusinessCard/BusinessCard'
import TabBar from "../../components/TabBar/TabBar"
import * as actions from '../../store/actions/index'

const businessList = (props) => {

const {searchedKeyword} = props;

 console.log("SEARCHED KEY WORD PROP: ", searchedKeyword)

 const dispatch = useDispatch();

 const businessTypesList = useSelector(state => {
   return state.appointment.businessTypesList
 });

 const servicesList = useSelector(state => {
   return state.appointment.servicesList
 });

 const businessList = useSelector(state => {
   return state.appointment.businessList
 })
 const searchResultList = useSelector(state => {
    return state.appointment.searchResultList
  });

const onInitSearchByBusinessTypeName =useCallback(() =>dispatch(actions.initSearchByBusinessTypeName(searchedKeyword)), [dispatch]);
 const onInitBusinessTypesList =useCallback(() =>dispatch(actions.initBusinessTypesList()), [dispatch]);
 const  onInitServicesList =useCallback(() => dispatch(actions.initServicesList()), [dispatch]);
 const onInitBusinessList = useCallback(() => dispatch(actions.initBusinessList()), [dispatch]);


 useEffect(() => {
   onInitBusinessTypesList();
 },[onInitBusinessTypesList]);

 useEffect(() => {
   onInitServicesList();
 },[onInitServicesList]);

 useEffect(() => {
   onInitBusinessList();
 },[onInitBusinessList]);


useEffect(() => {
    onInitSearchByBusinessTypeName();
}, [onInitSearchByBusinessTypeName])


        return ( 
            <Grid container direction="column" >
                <Grid item xs={5}>
                <TabBar  businessTypes={businessTypesList} services={servicesList} businesses={businessList}/>

                </Grid>
                { searchResultList && searchResultList.map((business) => (<Grid item><BusinessCard businessName={business.businessName} employees={business.employeeList} commentCount={Math.floor(Math.random() * (100 - 30) + 30)}/></Grid>) ) }
            </Grid>
           
        )
        }

export default businessList;