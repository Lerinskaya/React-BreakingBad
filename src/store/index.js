import { configureStore } from "redux";
import reducers from "./reducers";
import Repository from "src/repository";

export function getPersonsList() {
    return async (dispatch) => {

        const { value, error } = await Repository.ApiCore.getPerson();
        if (error || !value) {
            alert('error')
        }
        dispatch(setPersons(value))
        console.log(value)
    };
}


const { store } = configureStore(reducers);
export default store;