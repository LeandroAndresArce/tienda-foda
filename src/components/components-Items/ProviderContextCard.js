import { createContext, useState } from "react";
import productos from "../../utils/products.js";

export const listCartContext = createContext(null);

const ProviderContextCard = ( {children}) => {

    const [listCart, setListCart] = useState()

    const addProduct = (id) => {

        const producAdd = productos.find(product => product.id === id) 
        
        const productsToMaintain = listCart.filter(product => product.id !== id)

        let add = true;
        for(let product of listCart) {  
            if(product.id === id){
                let quantity = product.quantity;

                if(quantity < producAdd.stock){
                    const newQuantity = {...product, quantity: quantity + 1}
                    setListCart( [...productsToMaintain, newQuantity] )
                }

                add = false;
                break
            }  
        }

        add && setListCart( [...productsToMaintain, {...producAdd, quantity: 1}] )
    }

    const clearCart = () => {
        setListCart([]);
    }

    const removeFromCart = (id) => {
        const updateList = listCart.filter(product => product.id !== id)
        setListCart(updateList);
    }
    
    return(
        <listCartContext.Provider value={ {removeFromCart ,listCart ,addProduct, clearCart} }>
            {children}
        </listCartContext.Provider>

    )

}

export default ProviderContextCard;