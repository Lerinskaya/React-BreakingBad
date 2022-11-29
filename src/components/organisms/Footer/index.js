import style from './style.module.scss';


const Footer = () => {
    let date = new Date();
    console.log(date)
    return (
        <div className={style.footer}>
            <p className="date">{date.getFullYear()}</p>
            <p className="author">@LZ</p>
        </div >
    );
}

export default Footer;