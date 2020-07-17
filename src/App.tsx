import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store';
import Counter from './pages/counter';

import logo from './logo.svg';
import './App.css';

const App: React.FunctionComponent = () => {
  const store = configureStore();
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Counter count={0} />
        </header>
      </div>
    </Provider>
  );
};

export default App;