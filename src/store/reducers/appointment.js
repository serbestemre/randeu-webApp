import * as actionTypes from "../actions/actionTypes";

const initialState = {
  servicesList: null,
  servicesListError: false,
  businessTypesList: null,
  businessTypesListError: false,
  businessList: null,
  businessListError: null,
  payload: null,
  searchResultList: null,
  searchResultListError: null,
};

const setServicesList = (state, action) => {
  return {
    ...state,
    servicesList: action.servicesList,
    servicesListError: false,
  };
};

const fetchServicesListFailed = (state, action) => {
  return {
    ...state,
    servicesListError: true,
  };
};

const setBusinessTypesList = (state, action) => {
  return {
    ...state,
    businessTypesList: action.businessTypesList,
    businessTypesListError: false,
  };
};

const fetchBusinessTypesFailed = (state, action) => {
  return {
    ...state,
    businessTypesListError: true,
  };
};

const setBusinessList = (state, action) => {
  return {
    ...state,
    businessList: action.businessList,
    businessListError: false,
  };
};

const fetchBusinessListFailed = (state, action) => {
  return {
    ...state,
    businessListError: true,
  };
};

const searchByBusinessTypeNameStart = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const searchByBusinessTypeNameSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    searchResultList: action.searchResultList,
    searchResultListError: false,
  };
};

const searchByBusinessTypeNameFailed = (state, action) => {
  return {
    ...state,
    loading: false,
    searchResultList: null,
    searchResultListError: action.searchResultListError,
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_BUSINESS_TYPES_LIST:
      return setBusinessTypesList(state, action);
    case actionTypes.FETCH_BUSINESS_TYPES_LIST_FAILED:
      return fetchBusinessTypesFailed(state, action);
    case actionTypes.SET_SERVICES_LIST:
      return setServicesList(state, action);
    case actionTypes.FETCH_SERVICES_LIST_FAILED:
      return fetchServicesListFailed(state, action);
    case actionTypes.SET_BUSINESS_LIST:
      return setBusinessList(state, action);
    case actionTypes.FETCH_BUSINESS_LIST_FAILED:
      return fetchBusinessListFailed(state, action);
    case actionTypes.SEARCH_BY_BUSINESSTYPE_NAME_START:
      return searchByBusinessTypeNameStart(state, action);
    case actionTypes.SEARCH_BY_BUSINESSTYPE_NAME_SUCCESS:
      return searchByBusinessTypeNameSuccess(state, action);
    case actionTypes.SEARCH_BY_BUSINESSTYPE_NAME_FAILED:
      return searchByBusinessTypeNameFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
