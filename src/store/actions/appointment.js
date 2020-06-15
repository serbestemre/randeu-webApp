import * as actionTypes from "./actionTypes";
import axios from "../../axios";

export const setBusinessTypesList = (businessTypesList) => {
  return {
    type: actionTypes.SET_BUSINESS_TYPES_LIST,
    businessTypesList: businessTypesList,
  };
};

export const fetchServicesListFailed = () => {
  return {
    type: actionTypes.FETCH_SERVICES_LIST_FAILED,
  };
};

export const setServicesList = (servicesList) => {
  return {
    type: actionTypes.SET_SERVICES_LIST,
    servicesList: servicesList,
  };
};

export const searchByBusinessTypeNameStart = () => {
  return {
    type: actionTypes.SEARCH_BY_BUSINESSTYPE_NAME_START,
  };
};

export const searchByBusinessTypeNameSuccess = (businesslist) => {
  return {
    type: actionTypes.SEARCH_BY_BUSINESSTYPE_NAME_SUCCESS,
    searchResultList: businesslist,
  };
};

export const searchByBusinessTypeNameFailed = (error) => {
  return {
    type: actionTypes.SEARCH_BY_BUSINESSTYPE_NAME_START,
    searchResultListError: error,
  };
};

export const initSearchByBusinessTypeName = (searchedKeyWord) => {

const payload = {  businessTypeName: searchedKeyWord}

  return (dispatch) => {
    dispatch(searchByBusinessTypeNameStart());
    axios({
      method: "POST",
      url: "/business/businesslist-by-businesstype",
      headers: {
        "Content-Type": "application/json"
      },
      data: payload
    })
      .then((response) => {
        dispatch(searchByBusinessTypeNameSuccess(response.data.data));
      })
      .catch((error) => {
        console.log("error:req:", error.request);
        console.log("error response:", error.response);
        dispatch(searchByBusinessTypeNameFailed(error.response));
      });
  };
};

export const initServicesList = () => {
  return (dispatch) => {
    axios
      .get("/admin/services")
      .then((response) => {
        dispatch(setServicesList(response.data.data.servicesList));
      })
      .catch((err) => {
        dispatch(fetchServicesListFailed());
      });
  };
};

export const fetchBusinessTypesListFailed = () => {
  return {
    type: actionTypes.FETCH_BUSINESS_TYPES_LIST_FAILED,
  };
};

export const initBusinessTypesList = () => {
  return (dispatch) => {
    axios
      .get("/admin/businesstypes")
      .then((response) => {
        dispatch(setBusinessTypesList(response.data.data.businessTypesList));
      })
      .catch((err) => {
        dispatch(fetchBusinessTypesListFailed());
      });
  };
};

export const searchByServiceNameStart = () => {
  return {
    type: actionTypes.SEARCH_BY_SERVICE_NAME_START,
  }
}

export const searchByServiceNameSuccess = (businesslist) => {
  return {
    type: actionTypes.SEARCH_BY_SERVICE_NAME_SUCCESS,
    searchResultList: businesslist,
  }
}

export const searchByServiceNameFailed = (error) => {
  return {
    type: actionTypes.SEARCH_BY_SERVICE_NAME_FAILED,
    searchResultListError: error,
  }
}


export const initSearchByServiceName = (searchedKeyWord) => {
  const payload = {  serviceName: searchedKeyWord}

  return (dispatch) => {
    dispatch(searchByServiceNameStart());
    axios({
      method: "POST",
      url: "/business/businesslist-by-service",
      headers: {
        "Content-Type": "application/json"
      },
      data: payload
    })
      .then((response) => {
        dispatch(searchByServiceNameSuccess(response.data.data));
      })
      .catch((error) => {
        console.log("error:req:", error.request);
        console.log("error response:", error.response);
        dispatch(searchByServiceNameFailed(error.response));
      });
  };
};

export const searchByBusinessNameStart = ()  => {
  return {
    type: actionTypes.SEARCH_BY_BUSINESS_NAME_START
  }
}

export const searchByBusinessNameSuccess = (businesslist)  => {
  return {
    type: actionTypes.SEARCH_BY_BUSINESS_NAME_SUCCESS,
    searchResultList:businesslist
  }
}

export const searchByBusinessNameFailed = (error)  => {
  return {
    type: actionTypes.SEARCH_BY_BUSINESS_NAME_START,
    searchResultListError: error
  }
}

export const initSearchBusinessName = (searchedKeyWord) => {
  const payload = {  businessName: searchedKeyWord}

  return (dispatch) => {
    dispatch(searchByBusinessNameStart());
    axios({
      method: "POST",
      url: "/business/businesslist-by-name",
      headers: {
        "Content-Type": "application/json"
      },
      data: payload
    })
      .then((response) => {
        dispatch(searchByBusinessNameSuccess(response.data.data));
      })
      .catch((error) => {
        console.log("error:req:", error.request);
        console.log("error response:", error.response);
        dispatch(searchByBusinessNameFailed(error.response));
      });
  };
};

export const initBusinessList = () => {
  return (dispatch) => {
    axios
      .get("/business/businessList")
      .then((response) => {
        dispatch(setBusinessList(response.data.data.businessList));
      })
      .catch((err) => {
        dispatch(fetchBusinessListFailed());
      });
  };
};

export const setBusinessList = (businessList) => {
  return {
    type: actionTypes.SET_BUSINESS_LIST,
    businessList: businessList,
  };
};

export const fetchBusinessListFailed = () => {
  return {
    type: actionTypes.FETCH_BUSINESS_LIST_FAILED,
  };
};
