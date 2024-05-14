import './App.css';
import {  Routes,Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Order from './components/Order';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Nav home='Home' order='Order' contact='Contact Us' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='order' element={<Order />} />
        <Route path='contact' element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
