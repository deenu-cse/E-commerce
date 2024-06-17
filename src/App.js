import logo from './logo.svg';
import './App.css';
import Header from './components/header/header';
import { BrowserRouter, Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';
import Listing from './pages/listing/listing';
import Footer from './components/footer/footer';
import Notfound from './pages/notfound/notfound';
import Detail from './pages/details/detail';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact={true} path="/" element={<Home />} />
        <Route path="/listing" element={<Listing />} />
        <Route path="/*" element={<Notfound />} />
        <Route path="/product/details" element={<Detail />} />
      </Routes>
      <Footer/>
    </BrowserRouter>

  );
}

export default App;
