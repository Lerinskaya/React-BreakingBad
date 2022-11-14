import React from "react";
import style from './style.module.scss';

const Card = ({ card }) => {
    return (
        <div className={style.personCard}>
            <div className={style.personImage}>
                <img src={card.img} alt={card.name} />
            </div>
            <div className={style.personInfo}>
                <div className={style.personStatus}>{card.status}</div>
                <div className={style.personName}>{card.name}</div>
                <div className={style.birthDate}>{card.birthday}</div>
            </div>
        </div>
    );
}

export default Card;