import * as type from "./actions";

export function reducerCart(state, action) {
  switch (action.type) {
    case type.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    case type.ADD_TO_CART:
      if (!state.cart.find((item) => item.id === action.payload.id)) {
        state.cart.push({
          ...action.payload,
        });
      }
      return {
        ...state,
        cart: [...state.cart],
      };
    case type.INCREASE:
      let increment = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity + 1,
          };
        }
        return item;
      });
      return {
        ...state,
        cart: increment,
      };

    case type.DECREASE:
      let decrease = state.cart.map((item) => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      });
      return {
        ...state,
        cart: decrease,
      };

    case type.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
}
