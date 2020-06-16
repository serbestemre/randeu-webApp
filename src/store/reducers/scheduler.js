import * as actionTypes from "../actions/actionTypes";

const initialState = {
  loading: false,
  error: null,
  appointmentSchedule: [],
  scheduleRequestMessage: "",
  scheduleRequestError: "",
};

const fetchBusinessAppointmentScheduleStart = (state, action) => {
  return {
    ...state,
    loading: true,
    appointmentSchedule: [],
  };
};

const fetchBusinessAppointmentScheduleSuccess = (state, action) => {
  return {
    ...state,
    appointmentSchedule: action.appointmentSchedule,
    error: null,
  };
};

const fetchBusinessAppointmentScheduleFailed = (state, action) => {
  return {
    ...state,
    error: action.error,
  };
};

const scheduleAppointmentStart = (state, action) => {
  return {
    ...state,
    loading: true
  }
}

const scheduleAppointmentSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    scheduleRequestMessage: action.scheduleRequestMessage,
    scheduleRequestError: null,
  }
}

const scheduleAppointmentFailed = (state, action) => {
  return {
    ...state,
    loading: false,
    scheduleRequestMessage: "",
    scheduleRequestError: action.scheduleRequestError,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BUSINESS_APPOINTMENT_SCHEDULE_START:
      return fetchBusinessAppointmentScheduleStart(state, action);
    case actionTypes.FETCH_BUSINESS_APPOINTMENT_SCHEDULE_SUCCESS:
      return fetchBusinessAppointmentScheduleSuccess(state, action);
    case actionTypes.FETCH_BUSINESS_APPOINTMENT_SCHEDULE_FAILED:
      return fetchBusinessAppointmentScheduleFailed(state, action);
    case actionTypes.SCHEDULE_APPOINTMENT_START:
      return scheduleAppointmentStart(state, action);
    case actionTypes.SCHEDULE_APPOINTMENT_SUCCESS:
      return scheduleAppointmentSuccess(state, action);
    case actionTypes.SCHEDULE_APPOINTMENT_FAILED:
      return scheduleAppointmentFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
