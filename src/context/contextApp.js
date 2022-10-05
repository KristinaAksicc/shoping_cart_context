import { createContext, useReducer, useEffect } from "react";
import { reducerCart } from "./Reducers";
import axios from "axios";
import * as type from "./actions";

const initialState = {
  products: [],
  cart: [],
};

export const Store = ({ children }) => {
  const [state, dispatch] = useReducer(reducerCart, initialState);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products?limit=5")
      .then((response) => {
        const productsData = response.data;

        dispatch({
          type: type.FETCH_PRODUCTS,
          payload: productsData,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const addToCart = (item) => {
    dispatch({ type: type.ADD_TO_CART, payload: item });
  };
  const removeFromCart = (id) => {
    dispatch({ type: type.REMOVE_FROM_CART, payload: id });
  };
  const increase = (item) => {
    dispatch({ type: type.INCREASE, payload: item });
  };

  const decrease = (item) => {
    dispatch({ type: type.DECREASE, payload: item });
  };

  return (
    <AppContext.Provider
      value={{
        products: state.products,
        cart: state.cart,
        addToCart,
        removeFromCart,
        increase,
        decrease,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const AppContext = createContext(initialState);
