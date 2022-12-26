import { DECREASE, INCREASE, REMOVE, CLEAR_CART, GET_TOTALS, TOGGLE_AMOUNT } from './actions';

export default function reducer(state, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    let tempCart = [];
    if (action.payload.amount === 1) {
      tempCart = state.cart.filter((cartItem) => cartItem.id !== action.payload.id);
    } else {
      tempCart = state.cart.map((cartItem) => {
        if (cartItem.id === action.payload.id) {
          cartItem = { ...cartItem, amount: cartItem.amount - 1 };
        }
        return cartItem;
      });
    }
    return { ...state, cart: tempCart };
  }
  if (action.type === INCREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount + 1 };
      }
      return cartItem;
    });
    return {
      ...state,
      cart: tempCart,
    };
  }
  if (action.type === REMOVE) {
    return { ...state, cart: state.cart.filter((item) => item.id !== action.payload.id) };
  }
  if (action.type === GET_TOTALS) {
    let { price: totalPrice, amount: totalAmount } = state.cart.reduce(
      (cartTotal, cartItem) => {
        const { price, amount } = cartItem;
        const itemTotal = price * amount;
        cartTotal.price += itemTotal;
        cartTotal.amount += amount;
        return cartTotal;
      },
      { price: 0, amount: 0 },
    );
    totalPrice = parseFloat(totalPrice.toFixed(2));
    return { ...state, total: totalPrice, amount: totalAmount };
  }
  if (action.type === TOGGLE_AMOUNT) {
    console.log('Get amount');
  }
  return state;
}
