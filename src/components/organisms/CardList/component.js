import React from "react";
import { Link } from 'react-router-dom';

import Card from "../../molecules/Card";
import Loader from "../../atoms/Loader/Loader";

import style from './style.module.scss';


const CardList = ({ persons, isLoading }) => {
    const cards = persons.map(person =>
        <Link to={'/person/' + person.char_id}>
            <Card
                key={person.char_id}
                person={person}
            />
        </Link>
    );

    return (
        isLoading ? <Loader /> :
            <div className={style.cardList}>
                {cards}
            </div>
    );
}

export default CardList;