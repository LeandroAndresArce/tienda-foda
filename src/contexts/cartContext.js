import React, { createContext, useReducer } from 'react';
import CartReducer from "./cartReducer";

let initialState = {
  listCart: [],
  loading: false
};

export const CartContext = createContext(initialState);

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(CartReducer, initialState);

    const add = async (id) => {
        dispatch({
          type: 'ADD_PRODUCTS',
          payload: id,
        });
      };

      const deleteAll = async() =>{
        dispatch({
          type: 'DELETE_PRODUCTS',
        });

      }
      const deleteProduct = async(id) => {
      dispatch({
        type: "DELETE_PRODUCT",
        payload: id,
      });
    }

  return (
    <CartContext.Provider
      value={{
        listCart: state.listCart,
        loading: state.loading,
        add,
        deleteAll,
        deleteProduct,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

