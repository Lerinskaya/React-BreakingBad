import { configureStore } from "redux";
import reducers from "./reducers";

const { store } = configureStore(reducers);
export default store;