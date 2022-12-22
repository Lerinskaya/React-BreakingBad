import CardList from "../../organisms/CardList";
import ToggleButtons from "../../molecules/ToggleBtns";

import style from './style.module.scss';


const PersonsPage = () => {
    return (
        <div className={style.page}>
            <div className={style.personsList}>
                <div className={style.header}>
                    <h3 className={style.catalog}>Catalog</h3>
                    <ToggleButtons />
                </div>
                <CardList />
            </div>
        </div>
    );
}

export default PersonsPage;