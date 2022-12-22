import style from './style.module.scss';


const ToggleButtons = ({ grid, listHandler, gridHandler, }) => {
    let styleGrid = grid ? style.active : "";
    let styleList = !grid ? style.active : "";
    return (
        <div className={style.icons}>
            <button>
                <svg
                    data-show="list"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={styleList}
                    onClick={listHandler}
                >
                    <rect x="1" y="1" width="22" height="9" rx="1" strokeWidth="2" />
                    <rect x="1" y="14" width="22" height="9" rx="1" strokeWidth="2" />
                </svg>
            </button>
            <button>
                <svg
                    data-show="grid"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    className={styleGrid}
                    onClick={gridHandler}
                >
                    <rect x="1" y="1" width="9" height="9" rx="1" strokeWidth="2" />
                    <rect x="1" y="14" width="9" height="9" rx="1" strokeWidth="2" />
                    <rect x="14" y="1" width="9" height="9" rx="1" strokeWidth="2" />
                    <rect x="14" y="14" width="9" height="9" rx="1" strokeWidth="2" />
                </svg>
            </button>
        </div>
    );
}

export default ToggleButtons;