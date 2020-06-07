import * as actionTypes from './actionTypes';
import axios from '../../axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    };
};

export const authSuccess = (token) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    };
};

export const authFail = (error) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    };
};

export const authLogout = () => {
    localStorage.removeItem('token');
    return{
        type: actionTypes.AUTH_LOGOUT
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if(!token){
            dispatch(authLogout());
        }else {
            dispatch(authSuccess(token));
        }
    };
}

export const auth = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios({
            method: "POST",
            url: "/login",
            headers: {
              "Content-Type": "application/json",
            },
            data: {
                email:email,
                password:password
            },
          })
            .then((response) => {
                console.log(response);
                localStorage.setItem('token', response.data.data.token);
                dispatch(authSuccess(response.data.data.token));
            })
            .catch((err) => {
                console.log(err);
                if(err.response){
                    dispatch(authFail(err.response.data.message))
                }else{
                    dispatch(authFail("Server ile bağlantı kurulamadı. Lütfen tekrar deneyin."))
                }
            });
    }
}


