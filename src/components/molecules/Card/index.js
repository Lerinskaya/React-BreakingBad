import style from './style.module.scss';


const Card = ({ person }) => {
    return (
        <div className={style.personCard}>
            <div className={style.personImage}>
                <img src={person.img} alt={person.name} />
            </div>
            <div className={style.personInfo}>
                <p className={style.personStatus}>{person.status}</p>
                <p className={style.personName}>{person.name}</p>
                <p className={style.birthDate}>{person.birthday}</p>
            </div>
        </div>
    );
}

export default Card;