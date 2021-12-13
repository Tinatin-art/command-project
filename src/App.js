import './style/main.scss';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import PriceList from './pages/PriceList/PriceList';
import Clients from './pages/Clients/Clients';
import News from './pages/News/News';
import Contacts from './pages/Contacts/Contacts';

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/price-list" element={<PriceList/>}/>
        <Route path="/clients" element={<Clients/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
