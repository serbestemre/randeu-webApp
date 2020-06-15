import * as actionTypes from '../actions/actionTypes'

const initialState = {
  loading: false,
  error: null,
  appointmentSchedule:[]
}

const fetchBusinessAppointmentScheduleStart = (state, action) => {
  return {
    ...state,
    loading: true,
    appointmentSchedule:[]
  }
}

const fetchBusinessAppointmentScheduleSuccess = (state, action) => {
  return {
    ...state,
    appointmentSchedule: action.appointmentSchedule,
    error: null
  }
}

const fetchBusinessAppointmentScheduleFailed = (state, action) => {
  return {
    ...state,
    error:action.error
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BUSINESS_APPOINTMENT_SCHEDULE_START:
      return fetchBusinessAppointmentScheduleStart(state,action);
      case actionTypes.FETCH_BUSINESS_APPOINTMENT_SCHEDULE_SUCCESS:
        return fetchBusinessAppointmentScheduleSuccess(state,action);
    case actionTypes.FETCH_BUSINESS_APPOINTMENT_SCHEDULE_FAILED:
       return fetchBusinessAppointmentScheduleFailed(state, action)
      default:
        return state;
  }
}

  export default reducer;
  