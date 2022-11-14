import React from "react";
import Card from "../../molecules/Card";
import style from './style.module.scss';

const CardList = ({ persons }) => {
    const cards = persons.map((person) => (
        <Card key={person.id} person={person} />
    ));

    return (
        <div className={style.cardList}>
            {cards}
        </div>
    );
}

export default CardList;