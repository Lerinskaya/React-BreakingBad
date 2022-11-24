import React from "react";
import Card from "../../molecules/Card";
import Loader from "../../atoms/Loader/Loader";
import style from './style.module.scss';

const CardList = ({ persons, isLoading }) => {
    const cards = persons.map(person =>
        < Card key={person.char_id} person={person} />
    );

    return (
        isLoading ? <Loader /> :
            <div className={style.cardList}>
                {cards}
            </div>
    );
}

export default CardList;