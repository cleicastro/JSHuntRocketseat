import React from 'react';
import Header from './components/Header/';
import './index.css';
import './sevices/api';
import Routes from './router';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
