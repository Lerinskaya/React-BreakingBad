import { ADD_PERSON } from "../actionTypes/person";
import { SET_PERSONS } from "../actionTypes/person";
import { v4 } from "uuid";
// import repository from "../../repository";

const initialState = {
    persons: [

        // 'https://www.breakingbadapi.com/api/characters'
        // {
        //     id: v4(),
        //     name: "Walter White",
        //     birthday: "09-07-1958",
        //     img: "https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg",
        //     status: "Deceased",
        // },
    ],
    person: []
};

function persons(state = initialState, { type, payload, value }) {
    switch (type) {
        case ADD_PERSON: {
            return {
                ...state,
                persons: [...state.persons, {
                    id: v4(),
                    name: payload.name,
                    birthday: payload.birthday,
                    img: payload.img,
                    status: payload.status,
                }]
            }
        }
        case SET_PERSONS: return { ...state, persons: value };
        default:
            return state;
    }
}

export default persons;