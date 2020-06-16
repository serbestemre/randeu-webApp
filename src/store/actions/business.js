import * as actionTypes from "./actionTypes";
import axios from "../../axios";

const fetchBusinessEmployeelistStart = () => {
    return {
        type: actionTypes.FETCH_BUSINESS_EMPLOYEELIST_START
    }
}

const fetchBusinessEmployeelistSuccess = (employeelist) => {
    return {
        type: actionTypes.FETCH_BUSINESS_EMPLOYEELIST_SUCCESS,
        employeelist: employeelist
    }
}

const fetchBusinessEmployeelistFailed = (error) => {
    return {
        type: actionTypes.FETCH_BUSINESS_EMPLOYEELIST_FAILED,
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