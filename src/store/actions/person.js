import { ADD_PERSON } from "../actionTypes/person";
import { SET_PERSONS } from "../actionTypes/person";
import { SET_PERSON_BY_ID } from "../actionTypes/person";
import { SET_LOADING } from "../actionTypes/person";
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
export function isLoading(value) {
    return {
        type: SET_LOADING,
        payload: value,
    };
}
