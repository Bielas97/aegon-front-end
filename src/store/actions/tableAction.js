import * as actions from './actionTypes';
import axios from '../../axios-api';

export const fetchStart = () => {
    return {
        type: actions.FETCH_TABLES_START
    }
};

export const fetchSuccess = tables => {
    return {
        type: actions.FETCH_TABLES_SUCCESS,
        tables: tables
    }
};

export const fetchFail = error => {
    return {
        type: actions.FETCH_TABLES_FAIL,
        error: error
    }
};

export const fetchTables = () => {
    return dispatch => {
        dispatch(fetchStart());
        const token = "Bearer ".concat(localStorage.getItem("token"));
        axios.get("/tables/user", {
            headers: {
                "Authorization": token
            }
        })
            .then(response => {
                dispatch(fetchSuccess(response.data))
            })
            .catch(error => {
                dispatch(fetchFail(error));
            })
    }
};
