import * as actionTypes from "./actionTypes";
import {initUserProfile} from "./index";
import axios from "../../axios"

export const fetchBusinessAppointmentSchedule = () => {
  return {
    type: actionTypes.FETCH_BUSINESS_APPOINTMENT_SCHEDULE_START,
    loading: true,
  };
};

export const fetcBusinessAppointmentScheduleSuccess = (appointmentSchedule) => {
  return {
    type: actionTypes.FETCH_BUSINESS_APPOINTMENT_SCHEDULE_SUCCESS,
    appointmentSchedule: appointmentSchedule,
    loading: false,
  };
};

export const fetcBusinessAppointmentScheduleFail = (error) => {
  return {
    type: actionTypes.FETCH_BUSINESS_APPOINTMENT_SCHEDULE_FAILED,
    loading: false,
    appointmentSchedule: [],
  };
};

export const initFetchBusinessAppointmentSchedule = (
  startDate,
  businessId
) => {
  const payload = {
    startDate: startDate,
    businessId: businessId,
  };

  return (dispatch) => {
    dispatch(fetchBusinessAppointmentSchedule());
    axios({
      method: "POST",
      url: "/appointment/businessCalendar",
      headers: {
        "Content-Type": "application/json",
      },
      data: payload,
    })
    .then((response) => {
      dispatch(fetcBusinessAppointmentScheduleSuccess(response.data.data));
    }).catch((err) => {
      console.log("business appointment error:", err);
      dispatch(fetcBusinessAppointmentScheduleFail(err));
      // TODO Discpatch
    });
  };
};

const scheduleAppointmentStart = () => {
  return {
    type: actionTypes.SCHEDULE_APPOINTMENT_START
  }
}


const scheduleAppointmentSuccess = (responseMessage) => {
  return {
    type: actionTypes.SCHEDULE_APPOINTMENT_SUCCESS,
    scheduleRequestMessage: responseMessage
  }
}

const scheduleAppointmentFailed = (error) => {
 return {
  type: actionTypes.SCHEDULE_APPOINTMENT_FAILED,
  scheduleRequestError: error
 }
}

export const initScheduleAppointment = (selectedBusinessId, employee, service, startDate, endDate) => {

  const token =   localStorage.getItem("token");
  const rawObj = localStorage.getItem("userProfile");
  const userProfile =  JSON.parse(rawObj);


  const payload = {  
  customerId: userProfile._id,
  businessId: selectedBusinessId,
	employeeId: employee,
	serviceId: service,
	startDate: startDate,
	endDate: endDate
  }
  return (dispatch) => {
    dispatch(scheduleAppointmentStart())
    axios({
      method: "POST",
      url: "/appointment/request",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      data: payload,
    })
    .then((response) => {
      console.log("APP REQ RESP", response.data)
      dispatch(scheduleAppointmentSuccess(response.data.data));
      const token = localStorage.getItem("token");
      if(token){
        dispatch(initUserProfile(token));
      }
    }).catch((err) => {
      console.log("APP REQ ERRR",err.response)
      dispatch(scheduleAppointmentFailed(err));
    });
  };
}