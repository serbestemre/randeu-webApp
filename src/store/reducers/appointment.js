import * as actionTypes from "../actions/actionTypes";

const initialState = {
  servicesList: null,
  servicesListError: false,
  businessTypesList: null,
  businessTypesListError: false,
  businessList: null,
  businessListError: null,
  payload: null,
  searchResultList: [],
  searchResultListError: null,
  loading: false,
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

const searchByServiceNameStart = (state, action) => {
  return {
    ...state,
    loading: true,
  };
};

const searchByServiceNameSuccess = (state, action) => {
  return {
    ...state,
    searchResultList: action.searchResultList,
    loading: false,
  };
};

const searchByServiceNameFailed = (state, action) => {
  return {
    ...state,
    searchResultListError: action.searchResultListError,
    loading: false,
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

const searchByBusinessNameFailed = (state, action) => {
  return {
    ...state,
    loading: false,
    searchResultList: null,
    searchResultListError: action.searchResultListError,
  };
};

const searchByBusinessNameSuccess = (state, action) => {
  return {
    ...state,
    loading: false,
    searchResultList: action.searchResultList,
    searchResultListError: null,
  };
};

const searchByBusinessNameStart = (state, action) => {
  return {
    ...state,
    loading: true,
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
    case actionTypes.SEARCH_BY_SERVICE_NAME_START:
      return searchByServiceNameStart(state, action);
    case actionTypes.SEARCH_BY_SERVICE_NAME_SUCCESS:
      return searchByServiceNameSuccess(state, action);
    case actionTypes.SEARCH_BY_SERVICE_NAME_FAILED:
      return searchByServiceNameFailed(state, action);
    case actionTypes.SEARCH_BY_BUSINESS_NAME_START:
      return searchByBusinessNameStart(state, action);
    case actionTypes.SEARCH_BY_BUSINESS_NAME_SUCCESS:
      return searchByBusinessNameSuccess(state, action);
    case actionTypes.SEARCH_BY_BUSINESS_NAME_FAILED:
      return searchByBusinessNameFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
