import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

import { getPerson, getQuote } from "../../../store/actions/person";
import PersonCard from "./component.js";


export const PersonCardContainer = () => {
  const dispatch = useDispatch();
  const person = useSelector((state) => state.person);
  const quote = useSelector((state) => state.quote);
  const isLoading = useSelector((state) => state.isLoading);
  const isLoadingQuote = useSelector((state) => state.isLoadingQuote);
  let { id } = useParams();

  useEffect(() => {
    dispatch(getPerson(id));
  }, [id]);
  useEffect(() => {
    dispatch(getQuote(id))
  }, [id]);

  return <PersonCard
    person={person}
    quote={quote}
    isLoading={isLoading}
    isLoadingQuote={isLoadingQuote}
  />;
};

export default PersonCardContainer;