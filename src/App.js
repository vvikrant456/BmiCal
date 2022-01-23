import React from 'react';

import Bmi from './components/Bmi';
import Header from './components/Header';

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Bmi />
      </div>
    </>
  );
}

export default App;
