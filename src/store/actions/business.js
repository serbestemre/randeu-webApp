import * as actionTypes from "./actionTypes";
import axios from "../../axios";

const fetchBusinessEmployeelistStart = () => {
    return {
        type: actionTypes.FETCH_BUSINESS_EMPLOYEELIST_START
    }
}
const fetchProvidingServiceListStart = () => {
    return {
        type: actionTypes.FETCH_EMPLOYEE_PROVIDING_SERVICE_LIST_START
    }
}

const fetchBusinessEmployeelistSuccess = (employeelist) => {
    return {
        type: actionTypes.FETCH_BUSINESS_EMPLOYEELIST_SUCCESS,
        employeelist: employeelist
    }
}
const fetchProvidingServiceListSuccess = (providingServiceList) => {
    return {
        type: actionTypes.FETCH_EMPLOYEE_PROVIDING_SERVICE_LIST_SUCCESS,
        providingServiceList: providingServiceList
    }
}

const fetchBusinessEmployeelistFailed = (error) => {
    return {
        type: actionTypes.FETCH_BUSINESS_EMPLOYEELIST_FAILED,
        error: error
    }
}
const fetchProvidingServiceListFailed = (error) => {
    return {
        type: actionTypes.FETCH_EMPLOYEE_PROVIDING_SERVICE_LIST_FAILED,
        error: error
    }
}

export const initBusinessEmployeelist = (businessId) => {
    const payload = {  businessId: businessId}
  
    return (dispatch) => {
      dispatch(fetchBusinessEmployeelistStart());
      axios({
        method: "POST",
        url: "/business/employeelist",
        headers: {
          "Content-Type": "application/json"
        },
        data: payload
      })
        .then((response) => {
          dispatch(fetchBusinessEmployeelistSuccess(response.data.data[0].populatedEmployeeList));
        })
        .catch((error) => {
          console.log("error:req:", error.request);
          console.log("error response:", error.response);
          dispatch(fetchBusinessEmployeelistFailed(error.response));
        });
    };
  };

  export const initProvidingServiceList = (businessId) => {
    const payload = {  businessId: businessId, }
  
    return (dispatch) => {
      dispatch(fetchProvidingServiceListStart());
      axios({
        method: "POST",
        url: "/business/providingServiceList",
        headers: {
          "Content-Type": "application/json"
        },
        data: payload
      })
        .then((response) => {
          dispatch(fetchProvidingServiceListSuccess(response.data.data[0].populatedProvidingServices));
        })
        .catch((error) => {
          dispatch(fetchProvidingServiceListFailed(error.response));
        });
    };
  };