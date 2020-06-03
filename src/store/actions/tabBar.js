import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const setBusinessTypesList = (businessTypesList) => {
  return {
    type: actionTypes.SET_BUSINESS_TYPES_LIST,
    businessTypesList: businessTypesList,
  };
};

export const setBusinessList = (businessList) => {
    return {
        type: actionTypes.SET_BUSINESS_LIST,
        businessList: businessList
    }
}

export const fetchBusinessTypesFailed = () => {
  return {
    type: actionTypes.FETCH_BUSINESS_TYPES_LIST_FAILED,
  };
};

export const initBusinessTypesList = () => {
  return (dispatch) => {
    axios
      .get("/admin/businesstypes")
      .then((response) => {
        dispatch(setBusinessTypesList(response.data.data.businessTypesList));
      })
      .catch((err) => {
        console.log("ERROR initBusinessTypes ", err);
      });
  };
};

export const initBusinessList = () => {
  return (dispatch) => {
    axios
      .get("/business/businessList")
      .then((response) => {
        dispatch(setBusinessList(response.data.data.businessList));
      })
      .catch((err) => {
        console.log("ERROR initBusinessList ", err);
      });
  };
};

export const setServicesList = (servicesList) => {
  return {
    type: actionTypes.SET_SERVICES_LIST,
    servicesList: servicesList,
  };
};

export const initServicesList = () => {
  return (dispatch) => {
    axios
      .get("/admin/services")
      .then((response) => {
        dispatch(setServicesList(response.data.data.servicesList));
      })
      .catch((err) => {
        console.log("ERROR initServices ", err);
      });
  };
};
