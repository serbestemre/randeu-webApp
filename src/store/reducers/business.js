import * as actionTypes from "../actions/actionTypes";

const initialState = {
  employeelist: [],
  error: null,
  loading: false,
};

const fetchBusinessEmployeelistStart = (state,action) => {
    return {
        ...state,
        loading:true
    }
}
const fetchBusinessEmployeelistSuccess = (state,action) => {
    return {
        ...state,
        loading:false,
        employeelist: action.employeelist,
        error: null
    }
}

const fetchBusinessEmployeelistFailed = (state,action) => {
    return {
        ...state,
        loading:false,
        employeelist: [],
        error: action.error
    }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_BUSINESS_EMPLOYEELIST_START:
      return fetchBusinessEmployeelistStart(state, action);
    case actionTypes.FETCH_BUSINESS_EMPLOYEELIST_SUCCESS:
      return fetchBusinessEmployeelistSuccess(state, action);
    case actionTypes.FETCH_BUSINESS_EMPLOYEELIST_FAILED:
      return fetchBusinessEmployeelistFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
