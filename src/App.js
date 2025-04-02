import React from 'react';
import Meals from './components/Meals';
import Header from './components/Header';
import { CartProvider } from './store/CartContext';

const App = () => {
 return (
  <CartProvider>
    <Header />
    <Meals />
  </CartProvider>
  );
};

export default App;
