import { Routes, Route, Link } from 'react-router-dom'
import PersonsPage from "./components/pages/Persons/persons";
import PersonInfoPage from "./components/pages/PersonInfo/personInfo";
import MainPage from "./components/pages/Main/main";
import NotFound from "./components/pages/NotFound/NotFound";
import './styles/general.scss';

function App() {
    return (
        <>
            <header style={{ margin: '3rem' }}>
                <Link to="/" style={{ margin: '1rem' }}>Main</Link>
                <Link to="/persons" style={{ margin: '1rem' }}>Persons</Link>
                <Link to="/p" style={{ margin: '1rem' }}>Empty Page</Link>
            </header>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/persons" element={<PersonsPage />} />
                <Route path="/person" element={<PersonInfoPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}

export default App;

