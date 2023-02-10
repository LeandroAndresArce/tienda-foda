import productos from "../utils/products";

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS": {
      const cartId = action.payload;
      const producAdd = productos.filter(product => product.id === cartId) 
      return {
        ...state,
        listCart:[...state.listCart, producAdd],
      };
    }
    case "DELETE_PRODUCTS": {
      return {
        ...state,
        listCart:[],
      };
    }
    case "DELETE_PRODUCT": {
      const deleteProduct= action.payload;
      const updateList = productos.filter(product => product.id !== deleteProduct)
      return{
        ...state,
        listCart:[...state.listCart, updateList]
      };
      }
    default:
      return state;
  }
}
;

export default CartReducer;
