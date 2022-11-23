import React from "react";
import Card from "../../molecules/Card";
import Loader from "../../atoms/Loader/Loader";
import style from './style.module.scss';
import PersonInfoPage from "../../pages/PersonInfo/personInfo";
import { Routes, Route, Link } from 'react-router-dom'

const CardList = ({ persons, isLoading }) => {
    const cards = persons.map(person =>
        <Link to="/person">< Card key={person.char_id} person={person} /> </Link>
    );

    return (
        isLoading ? <Loader /> :
            <div className={style.cardList}>
                {/* <Link to="/person">{cards}</Link> */}
                {cards}
                <Routes>
                    <Route path="/person" element={<PersonInfoPage />} />
                </Routes>
            </div>
    );
}

export default CardList;