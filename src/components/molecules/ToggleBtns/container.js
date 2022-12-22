import ToggleButtons from "./component";
import { useSelector, useDispatch } from "react-redux";
import { toggleHandler } from "../../../store/actions/person";

export const ToggleContainer = () => {
    const dispatch = useDispatch();
    const grid = useSelector((state) => state.isGrid);

    const listHandler = () => {
        console.log('click')
        dispatch(toggleHandler(false));
    };
    const gridHandler = () => {
        dispatch(toggleHandler(true));
        console.log('click')
    };

    return <ToggleButtons
        grid={grid}
        listHandler={listHandler}
        gridHandler={gridHandler}
    />;
};

export default ToggleContainer;