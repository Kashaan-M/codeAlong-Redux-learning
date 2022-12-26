import React from 'react';
// components
import Navbar from './components/Navbar';
import CartContainer from './components/CartContainer';
// items
import cartItems from './cart-items';
// redux stuff
import { createStore } from 'redux';

// react-redux
import { Provider } from 'react-redux';
// actions
import { DECREASE, INCREASE } from './actions';
// reducer
import reducer from './reducer';

// store - stores data, think of state.

// reducer - function that is used to update store.
const initialStore = {
  cart: cartItems,
  total: 12,
  amount: 5,
};

const store = createStore(reducer, initialStore);

function App() {
  // cart setup

  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
