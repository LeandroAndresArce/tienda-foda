import cart from "../../img/cart.png";
import { useContext } from "react";
import { listCartContext } from "../components-Items/ProviderContextCard";
import { controllerShowCart } from "./ContextCart";

const CartWidget = () => {
    const { setCartShow, cartShow } = useContext(controllerShowCart)
    const { listCart } = useContext(listCartContext)

    const showCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return(
        <div className="containerLength" onClick={showCart}>
            <img src={cart} alt="cart"></img>
            <span className="cantCart">
                {listCart.length}
            </span>
        </div>
    )
}

export default CartWidget;