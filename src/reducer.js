import initialStore from './store';
import { DECREASE, INCREASE, REMOVE, CLEAR_CART, GET_TOTALS, TOGGLE_AMOUNT } from './actions';

export default function reducer(state = initialStore, action) {
  if (action.type === CLEAR_CART) {
    return { ...state, cart: [] };
  }
  if (action.type === DECREASE) {
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        cartItem = { ...cartItem, amount: cartItem.amount - 1 };
      }
      return cartItem;
    });
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
    let tempCart = state.cart.map((cartItem) => {
      if (cartItem.id === action.payload.id) {
        // IF action.payload.toggle Is Equal To 'inc' INCREASE AMOUNT BY 1 ,
        // ELSE IF action.payload.toggle Is Equal To 'dec' DECREASE AMOUNT BY 1 , ELSE cartItem will be exact copy of cartItem
        action.payload.toggle === 'inc'
          ? (cartItem = { ...cartItem, amount: cartItem.amount + 1 })
          : action.payload.toggle === 'dec'
          ? (cartItem = { ...cartItem, amount: cartItem.amount - 1 })
          : (cartItem = { ...cartItem });
      }
      return cartItem;
    });

    return { ...state, cart: tempCart };
  }
  return state;
}
