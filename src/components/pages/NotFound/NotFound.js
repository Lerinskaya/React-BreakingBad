import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div style={{ margin: '4rem' }}>
            <h1>Страница не найдена</h1>
            <Link to="/">Вернуться</Link>
        </div>
    );
}

export default NotFound;