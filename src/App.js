import React from 'react';
import Meals from './components/Meals';
import Header from './components/Header';

const App = () => {
 return (
    <div>
        <Header />
        <main>
          <Meals />
        </main>
    </div>
  );
};

export default App;
