import { ADD_PERSON } from "../actionTypes/person";
import { SET_PERSONS } from "../actionTypes/person";
import { SET_PERSON_BY_ID } from "../actionTypes/person";
import { GET_QUOTE_BY_ID } from "../actionTypes/person";
import { SET_LOADING } from "../actionTypes/person";
import { SET_LOADING_QUOTE } from "../actionTypes/person";
import { IS_GRID } from "../actionTypes/person";


const initialState = {
    persons: [],
    person: {},
    quote: {},
    isLoading: true,
    isLoadingQuote: true,
    isGrid: true
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
                isLoading: false,
                isLoadingQuote: true
            }
        };
        case SET_PERSONS: {
            return { ...state, persons: payload, isLoading: false, isLoadingQuote: true }
        };
        case SET_LOADING: {
            return { ...state, isLoading: true }
        };
        case SET_LOADING_QUOTE: {
            return { ...state, isLoading: false, isLoadingQuote: true }
        };
        case SET_PERSON_BY_ID: {
            return {
                ...state,
                person: {
                    id: payload.char_id,
                    name: payload.name,
                    nickname: payload.nickname,
                    birthday: payload.birthday,
                    img: payload.img,
                    status: payload.status,
                },
                isLoading: false
            }
        };
        case GET_QUOTE_BY_ID: {
            return {
                ...state, quote: payload.quote ? payload.quote : 'This character has no quote',
                isLoading: false,
                isLoadingQuote: false
            }
        };
        case IS_GRID: {
            return { ...state, isGrid: payload };
        }
        default:
            return state;
    }
}

export default persons;