import React, {useEffect, useCallback} from "react";
import {useDispatch, useSelector  } from 'react-redux';
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import BusinessCard from '../../components/Card/BusinessCard/BusinessCard'
import * as searchActions from '../../store/actions/index'

const businessList = (props) => {

const {searchedKeyword} = props;

 console.log("SEARCHED KEY WORD PROP: ", searchedKeyword)

const dispatch = useDispatch();

const searchResultList = useSelector(state => {
    return state.appointment.searchResultList
  });

  const onInitSearchByBusinessTypeName =useCallback(() =>dispatch(searchActions.initSearchByBusinessTypeName(searchedKeyword)), [dispatch]);

useEffect(() => {
    onInitSearchByBusinessTypeName();
}, [onInitSearchByBusinessTypeName])


        return ( 
            <Auxiliary key="list">
                { searchResultList && searchResultList.map((business) => (<BusinessCard businessName={business.businessName} employees={business.employeeList} commentCount={Math.floor(Math.random() * (100 - 30) + 30)}/>) ) }
            </Auxiliary>
        )
        }

export default businessList;