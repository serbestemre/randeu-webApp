import * as actionTypes from "../actions/actionTypes";

const initialState = {
  employeelist: [],
  error: null,
  loading: false,
  providingServiceList:[],
};

const fetchBusinessEmployeelistStart = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};
const fetchProvidingServiceListStart = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};
const fetchBusinessEmployeelistSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    employeelist: action.employeelist,
    error: null,
  };
};
const fetchProvidingServiceListSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    providingServiceList: action.providingServiceList,
    error: null,
  };
};

const fetchBusinessEmployeelistFailed = (state, action) => {
  return {
    ...state,
    loading: false,
    employeelist: [],
    error: action.error,
  };
};
const fetchProvidingServiceListFailed = (state, action) => {
  return {
    ...state,
    loading: false,
    providingServiceList:[],
    error: action.error,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BUSINESS_EMPLOYEELIST_START:
      return fetchBusinessEmployeelistStart(state, action);
    case actionTypes.FETCH_BUSINESS_EMPLOYEELIST_SUCCESS:
      return fetchBusinessEmployeelistSuccess(state, action);
    case actionTypes.FETCH_BUSINESS_EMPLOYEELIST_FAILED:
      return fetchBusinessEmployeelistFailed(state, action);
    case actionTypes.FETCH_EMPLOYEE_PROVIDING_SERVICE_LIST_START:
      return fetchProvidingServiceListStart(state, action);
    case actionTypes.FETCH_EMPLOYEE_PROVIDING_SERVICE_LIST_SUCCESS:
      return fetchProvidingServiceListSuccess(state, action);
    case actionTypes.FETCH_EMPLOYEE_PROVIDING_SERVICE_LIST_FAILED:
      return fetchProvidingServiceListFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
