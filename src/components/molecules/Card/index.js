import style from './style.module.scss';


const Card = ({ person }) => {
    return (
        <div className={style.personCard}>
            <div className={style.personImage}>
                <img src={person.img} alt={person.name} />
            </div>
            <div className={style.personInfo}>
                <div className={style.personStatus}>{person.status}</div>
                <div className={style.personName}>{person.name}</div>
                <div className={style.birthDate}>{person.birthday}</div>
            </div>
        </div>
    );
}

export default Card;