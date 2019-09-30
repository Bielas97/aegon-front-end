import * as actions from './actionTypes';
import axios from '../../axios-api';

const ticketsActionStart = () => {
    return {
        type: actions.TICKET_ACTION_START
    }
};

const fetchSuccess = tickets => {
    return {
        type: actions.FETCH_TICKETS_SUCCESS,
        tickets: tickets
    }
};

const ticketActionFail = error => {
    return {
        type: actions.TICKET_ACTION_FAIL,
        error: error
    }
};

const deleteTicketSuccess = action => {
    return {
        type: actions.DELETE_TICKET_SUCCESS,
        message: action.message,
        timestamp: action.timestamp
    }
};

const updateTicketSuccess = action => {
    return {
        type: actions.UPDATE_TICKET_SUCCESS,
        message: action.message,
        timestamp: action.timestamp
    }
};

export const fetchTickets = () => {
    return dispatch => {
        dispatch(ticketsActionStart());
        const token = "Bearer ".concat(localStorage.getItem("token"));
        axios.get('/tickets', {
            headers: {
                "Authorization": token
            }
        })
            .then(response => {
                dispatch(fetchSuccess(response.data))
            })
            .catch(err => {
                dispatch(ticketActionFail(err))
            })
    }
};

export const deleteTicketById = id => {
    return dispatch => {
        dispatch(ticketsActionStart());
        const url = '/tickets/'.concat(id);
        const token = "Bearer ".concat(localStorage.getItem("token"));
        axios.delete(url, {
            headers: {
                "Authorization": token
            }
        })
            .then(response => {
                dispatch(deleteTicketSuccess(response.data))
            })
            .catch(error => {
                dispatch(ticketActionFail(error.response));
            })
    }
};

export const updateTicket = ticket => {
    return dispatch => {
        dispatch(ticketsActionStart());
        const url = '/tickets';
        const token = "Bearer ".concat(localStorage.getItem("token"));
        axios.put(url, ticket, {
            headers: {
                "Authorization": token
            }
        })
            .then(response => {
                dispatch(updateTicketSuccess(response.data))
            })
            .catch(error => {
                console.log('error', error);
                console.log('error response', error.response);
                dispatch(ticketActionFail(error.response))
            })
    }
};
