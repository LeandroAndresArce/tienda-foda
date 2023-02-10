import productos from "../utils/products";

const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCTS": {
      const cartId = action.payload;
      const producAdd = productos.filter(product => product.id === cartId) 
      console.log("producAdd", producAdd)
      return {
        ...state,
        listCart:[...state.listCart, producAdd[0]],
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
      const updateList = state.listCart?.filter(product => product.id !== deleteProduct)
      console.log("updateList",updateList)
      return{
        ...state,
        listCart: updateList
      };
      }
    default:
      return state;
  }
}
;

export default CartReducer;