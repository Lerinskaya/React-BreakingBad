import React from 'react';

import style from './style.module.scss';
import img from '../../../styles/img/main.png';
import image from '../../../styles/img/main.webp';


function MainPage() {
    return (
        <div className={style.mainPage}>
            <picture>
                <source srcSet={img} alt="main" />
                <img src={image} alt="main" loading="lazy" className={style.mainImage} />
            </picture>
        </div>
    );
}

export default MainPage;
