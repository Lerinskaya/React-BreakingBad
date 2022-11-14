import { useSelector, useDispatch } from "react-redux";
import { addPerson } from "../../../store/actions/person";
import CardList from "./component";

export const CardListContainer = () => {
  const dispatch = useDispatch();
  const persons = useSelector((state) => state.persons);

  const add = (name, birthday, img, status) => {
    dispatch(addPerson(name, birthday, img, status));
  };

  return <CardList persons={persons} add={add} />;
};

export default CardListContainer;