import { ADD_PERSON } from "../actionTypes/person";
import { SET_PERSONS } from "../actionTypes/person";

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
