import React from "react";
import Loader from "../../atoms/Loader/Loader";
import style from './style.module.scss';

const PersonCard = ({ person, isLoading }) => {
    return (
        isLoading ? <Loader /> :
            <div className={style.personCard}>
                <div className={style.personImage}>
                    <img src={person.img} alt={person.name} />
                </div>
                <div className={style.personInfo}>
                    <div className={style.personStatus}>{person.status}</div>
                    <div className={style.personName}>{person.name}</div>
                    <div className={style.personNickname}><span>Nickname: </span>{person.nickname}</div>
                    <div className={style.birthDate}><span>Date of birth: </span>{person.birthday}</div>
                    <div className={style.quote}><span>Quote: </span>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non,
                        aliquam laoreet vivamus sed. Diam fames mi, quam tellus cursus volutpat velit massa"</div>
                </div>
            </div>
    );
}

export default PersonCard;