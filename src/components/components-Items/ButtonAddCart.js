import { useContext } from "react";
import cartWhite from "../../img/cart.png";
import { listCartContext } from "./ProviderContextCard";

const ButtonAddCart = (id) =>{

    let {addProduct} = useContext(listCartContext)

    return(
        <button id="AddCart" onClick={ () => addProduct(id) }>
            <img src={cartWhite} alt="add"></img>
        </button>
    )
    
}

export default ButtonAddCart;