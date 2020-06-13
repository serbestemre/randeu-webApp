import * as actionTypes from "./actionTypes";
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
      console.log("business appoinment success response => ", response);
      dispatch(fetcBusinessAppointmentScheduleSuccess(response.data.data));
    }).catch((err) => {
      console.log("business appointment error:", err);
      dispatch(fetcBusinessAppointmentScheduleFail(err));
      // TODO Discpatch
    });
  };
};
