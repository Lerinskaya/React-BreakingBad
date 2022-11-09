import React from "react";
import style from './style.module.scss';

const Card = () => {
    return (
        <div className={style.personCard}>
            <div className={style.personImage}>
                <img src="https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg" alt="Walter White" />
            </div>
            <div className={style.personInfo}>
                <div className={style.personStatus}>alive</div>
                <div className={style.personName}>Walter White</div>
                <div className={style.birthDate}>09-07-1958</div>
            </div>
        </div>
    );
}

export default Card;