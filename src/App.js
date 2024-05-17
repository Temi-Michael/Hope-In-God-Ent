import './App.css';
import {  Routes,Route } from 'react-router-dom'
import Nav from './components/Nav';
import Home from './components/Home';
import Order from './components/Order';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Alert from './components/Alert';

function App() {
  return (
    <div>
      <Nav home='Home' order='Order' contact='Contact Us' />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='order' element={<Order />} />
        <Route path='contact' element={<Contact />} />
        <Route path='alert' element={<Alert />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
