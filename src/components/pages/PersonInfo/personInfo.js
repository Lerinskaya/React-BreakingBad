import { Link } from 'react-router-dom';

import PersonCard from "../../organisms/Person/container";

import style from './style.module.scss';
import img from '../../../styles/img/back.png';


function PersonInfoPage() {
    return (
        <div className={style.page}>
            <div className={style.infoPage}>
                <div className={style.back}>
                    <img src={img} alt="back" />
                    <Link to="/persons"><p>Back to catalog</p></Link>
                </div>
                <div className={style.infoPerson}>
                    <PersonCard />
                </div>
            </div>
        </div>
    );
}

export default PersonInfoPage;