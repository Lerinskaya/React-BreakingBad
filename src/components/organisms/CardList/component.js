import React from "react";
import Card from "../../molecules/Card";
import style from './style.module.scss';
// import persons from '../../../store/reducers/persons';

const CardList = ({ persons }) => {
    const cards = persons.map(person =>
        < Card key={person.id} person={person} excerpt />
    );

    return (
        <div className={style.cardList}>
            {cards}
        </div>
    );
}

export default CardList;