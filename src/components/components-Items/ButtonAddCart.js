import { useContext } from "react";
import cartWhite from "../../img/cart.png";
import { CartContext } from "../../contexts/cartContext";

const ButtonAddCart = (props) =>{

    let {add} = useContext(CartContext)

    return(
        <button id="AddCart" onClick={ () => add(props.id) }>
            <img src={cartWhite} alt="add"></img>
        </button>
    )
    
}

export default ButtonAddCart;