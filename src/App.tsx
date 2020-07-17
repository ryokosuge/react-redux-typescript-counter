import React from 'react';
import logo from './logo.svg';
import Counter from './pages/counter';
import './App.css';

const App: React.FunctionComponent = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter count={0} />
      </header>
    </div>
  );
};

export default App;