import React from 'react';
import Meals from './components/Meals';
import Header from './components/Header';
import { CartProvider } from './store/CartContext';
import Modal from './components/UI/Modal';

const App = () => {
 return (
  <CartProvider>
    <Header />
    <Meals />
    <Modal />
  </CartProvider>
  );
};

export default App;
