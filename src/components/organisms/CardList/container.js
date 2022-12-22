import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import { addPerson, getPersonsList } from "../../../store/actions/person";
import CardList from "./component";


export const CardListContainer = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.persons);
  const isLoading = useSelector((state) => state.isLoading);
  const grid = useSelector((state) => state.isGrid);
  useEffect(() => {
    dispatch(getPersonsList());
  }, []);

  const add = (name, birthday, img, status) => {
    dispatch(addPerson(name, birthday, img, status));
  };

  return <CardList
    persons={persons}
    add={add}
    isLoading={isLoading}
    grid={grid}
  />;
};

export default CardListContainer;