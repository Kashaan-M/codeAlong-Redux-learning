export const DECREASE = 'DECREASE';
export const INCREASE = 'INCREASE';
export const REMOVE = 'REMOVE';
export const CLEAR_CART = 'CLEAR_CART';
export const GET_TOTALS = 'GET_TOTALS';
export const TOGGLE_AMOUNT = 'TOGGLE_AMOUNT';

// action creators
export const removeItem = (id) => {
  return { type: REMOVE, payload: { id } };
};
export const toggleCreator = (id, toggle) => {
  return { type: TOGGLE_AMOUNT, payload: { id, toggle } };
};
