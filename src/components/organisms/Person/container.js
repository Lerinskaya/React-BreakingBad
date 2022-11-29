import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { getPerson } from "../../../store/actions/person";
import PersonCard from "./component.js";


export const PersonCardContainer = () => {
  const dispatch = useDispatch();
  const person = useSelector((state) => state.person);
  const isLoading = useSelector((state) => state.isLoading);
  let { id } = useParams();
  useEffect(() => {
    dispatch(getPerson(id));
  }, [id]);

  return <PersonCard
    person={person}
    isLoading={isLoading}
  />;
};

export default PersonCardContainer;