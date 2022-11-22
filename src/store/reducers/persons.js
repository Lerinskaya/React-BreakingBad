import { ADD_PERSON } from "../actionTypes/person";
import { SET_PERSONS } from "../actionTypes/person";
import { SET_LOADING } from "../actionTypes/person";

const initialState = {
    persons: [],
    person: [],
    isLoading: true,
};

function persons(state = initialState, { type, payload }) {
    switch (type) {
        case ADD_PERSON: {
            return {
                ...state,
                persons: [...state.persons, {
                    id: payload.char_id,
                    name: payload.name,
                    birthday: payload.birthday,
                    img: payload.img,
                    status: payload.status,
                }],
                isLoading: false
            }
        }
        case SET_PERSONS: {
            return { ...state, persons: payload, isLoading: false }
        };
        case SET_LOADING: {
            return { ...state, isLoading: true }
        };
        default:
            return state;
    }
}

export default persons;