import React from "react";
import { Link } from 'react-router-dom';

import Card from "../../molecules/Card";
import Loader from "../../atoms/Loader/Loader";

import style from './style.module.scss';


const CardList = ({ persons, isLoading, grid }) => {
    let list;
    let status;
    if (grid) {
        list = style.cardList;
        status = style.none;
    } else {
        list = style.list;
        status = style.block
    }
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
            <>
                <div className={status}> <p>Status</p> <p>Name</p> <p>Birth Date</p> </div>
                <div className={list}>
                    {cards}
                </div>
            </>
    );
}

export default CardList;