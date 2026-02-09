import logo from './logo.svg';
import './App.css';
import Navbar from './pages/Navbar';
import Home from './pages/Home';
import Footer from './pages/Footer';
import Sunscreen from './pages/Sunscreen';
import Toner from './pages/Toner';
import Serum from './pages/Serum'
import Faceoil from './pages/Faceoil';
import Moisturizer from './pages/Moisturizer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sunprotect from './pages/Sunprotect';
import Tonerproduct from './pages/Tonerproduct'
import Serumproduct from './pages/Serumproduct';
import Faceoilproduct from './pages/Faceoilproduct';
import Moiproduct from './pages/Moiproduct';
import Cart from './pages/Cart';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>


          <Route path='/' element={<Home />} />

          <Route path='/sunscreen' element={<Sunprotect />} />
          <Route path='/toner' element={<Tonerproduct />} />
          <Route path='/serum' element={<Serumproduct />} />
          <Route path='/faceoil' element={<Faceoilproduct />} />
          <Route path='/moisturizer' element={<Moiproduct />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        <Footer />
      </BrowserRouter>
      {/* 
      <Sunprotect />
      <Tonerproduct />
      <Serumproduct/>
      <Faceoilproduct/>
      <Moiproduct/> */}
    </div>
  );
}

export default App;
