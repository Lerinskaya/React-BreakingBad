import style from './style.module.scss';

const Loader = () => {
    return (
        <div className={style.loader}>
            <span className={style.spinnerWave}></span>
        </div>
    );
}

export default Loader;