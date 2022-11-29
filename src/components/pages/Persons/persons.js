import CardList from "../../organisms/CardList";

import style from './style.module.scss';


const PersonsPage = () => {
    return (
        <div className={style.page}>
            <div className={style.personsList}>
                <h3 className={style.catalog}>Catalog</h3>
                <CardList />
            </div>
        </div>
    );
}

export default PersonsPage;