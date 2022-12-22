import { ADD_PERSON } from "../actionTypes/person";
import { SET_PERSONS } from "../actionTypes/person";
import { SET_PERSON_BY_ID } from "../actionTypes/person";
import { SET_LOADING } from "../actionTypes/person";
import { SET_LOADING_QUOTE } from "../actionTypes/person";
import { GET_QUOTE_BY_ID } from "../actionTypes/person";
import { IS_GRID } from "../actionTypes/person";

import Repository from "../../repository";


export function getPersonsList() {
    return async (dispatch) => {
        dispatch(isLoading(true));
        const { value, error } = await Repository.APICore.getPersons();
        if (error || !value) {
            alert('error')
        }
        dispatch(setPersons(value))
    };
}

export function getPerson(id) {
    return async (dispatch) => {
        dispatch(isLoading(true));
        const { value, error } = await Repository.APICore.getPersonById(id);
        if (error || !value) {
            alert('error')
        }
        dispatch(setPersonById(value))
    };
}

export function getQuote(id) {
    return async (dispatch) => {
        const { value, error } = await Repository.APICore.getQuoteById(id);
        if (error || !value) {
            alert('error')
        }
        dispatch(getQuoteById(...value))
    };
}

export function addPerson(name, birthday, img, status) {
    return {
        type: ADD_PERSON,
        payload: { name, birthday, img, status },
    };
}
export function setPersons(value) {
    return {
        type: SET_PERSONS,
        payload: value,
    };
}
export function setPersonById(value) {
    return {
        type: SET_PERSON_BY_ID,
        payload: value,
    };
}
export function getQuoteById(quote) {
    return {
        type: GET_QUOTE_BY_ID,
        payload: { quote },
    };
}
export function isLoading(value) {
    return {
        type: SET_LOADING,
        payload: value,
    };
}
export function isLoadingQuote(value) {
    return {
        type: SET_LOADING_QUOTE,
        payload: value,
    };
}
export function toggleHandler(value) {
    return {
        type: IS_GRID,
        payload: value,
    };
};