import * as actionTypes from './actionTypes';
import axios from '../../axios';


export const setBusinessTypes = (businessTypesList) => {
    return {
        type: actionTypes.SET_BUSINESS_TYPES,
        businessTypes: businessTypesList
    }
}

export const fetchBusinessTypesFailed = () => {
    return {
        type: actionTypes.FETCH_BUSINESS_TYPES_FAILED
    }
};


export const initBusinessTypes = () => {
    return dispatch => {
        axios.get('/admin/businesstypes')
    .then( response => {
        dispatch(setBusinessTypes(response.data.data.businessTypesList))
    })
    .catch(err => {
       console.log("ERROR initBusinessTypes ", err)
    })
    };
};