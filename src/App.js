import React from 'react';
import { Provider } from 'react-redux';
import { store } from './app/store';
import CartList from './components/CartList';
import './App.css';

const App = () => {
  return (
    <Provider store={store}>
      <div className="app">
        <CartList />
      </div>
    </Provider>
  );
};

export default App;
