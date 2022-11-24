import CardList from "../../organisms/CardList";
import style from './style.module.scss';

const PersonsPage = () => {
    return (
        <div className={style.personsList}>
            <h3 className={style.catalog}>Каталог</h3>
            <CardList />
        </div>
    );
}

export default PersonsPage;