import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import CatalogPage from './pages/CatalogPage';
import Book from './pages/Book';

function App() {
  return (
    <>
    <Header />
      <Routes>
          <Route path="/" element = {<HomePage />} />
          <Route path="/puppy-love" element = {<CatalogPage collection="PLJ" />} />
          <Route path="/happy-little-books" element = {<CatalogPage collection="HLB" />} />
          <Route path="/beatrix-potter" element = {<CatalogPage collection="BXP" />} />
          <Route path="/book" element = {<Book/>} />
          <Route path="/book/:bookID" element = {<Book />} />
      </Routes>
    <Footer />
    </>
  );
}

export default App;
