import cart from "../../img/cart.png";
import { useContext } from "react";
import { controllerShowCart } from "./ContextCart";
import { CartContext } from "../../contexts/cartContext";

const CartWidget = () => {
    const { setCartShow, cartShow } = useContext(controllerShowCart)
    const { listCart } = useContext(CartContext)
    console.log("listCart", listCart)
    const showCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return(
        <div className="containerLength" onClick={showCart}>
            <img src={cart} alt="cart"></img>
            <span className="cantCart">
                {listCart?.length}
            </span>
        </div>
    )
}

export default CartWidget;