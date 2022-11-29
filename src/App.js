import { Routes, Route } from 'react-router-dom';

import PersonsPage from "./components/pages/Persons/persons";
import PersonInfoPage from "./components/pages/PersonInfo/personInfo";
import MainPage from "./components/pages/Main/main";
import NotFound from "./components/pages/NotFound/NotFound";
import Header from "./components/organisms/Header/index";
import Footer from "./components/organisms/Footer/index";

import './styles/general.scss';


function App() {
    return (
        <div className='app'>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/persons" element={<PersonsPage />} />
                <Route path="/person/:id" element={<PersonInfoPage />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;

