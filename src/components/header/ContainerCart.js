import "../../styles/containerCart.css";
import close from "../../img/close.png";
import ItemCart from "./ItemCart.js";
import clear from "../../img/clear.png";
import { useContext } from "react";
import {controllerShowCart} from "./ContextCart";
import { CartContext } from "../../contexts/cartContext";


const ContainerCart = () => {

    const { cartShow, setCartShow} = useContext(controllerShowCart);
    const {listCart, deleteAll } = useContext(CartContext);

    const style = {
        display: cartShow
    }

    const closeCart = () => {
        setCartShow( (cartShow === "none") ? "flex" : "none" )
    }

    return(
        
            <div className="cart" style={style} >
                <div className="cerrar">
                    <button className="close" onClick={closeCart}>
                        <img src={close}></img>
                    </button>
                </div>

                <div className="containerItemsCart">
                    {
                        (listCart?.length === 0 ) ? <span className="emptyCart">Tu carrito esta vacio, ¡llenalo!</span>
                        : listCart?.map(producto => ( 
                            <ItemCart 
                                key={producto[0].id}
                                id={producto[0].id}
                                title={producto[0].title}
                                image={producto[0].img}
                                quantity={producto[0].stock}
                                price={producto[0].precio}
                            />
                        ))
                    }   
                </div>

                <div className="TerminarCompra">
                    
                    <button className="terminar" >
                        Terminar compra
                    </button>

                    <button className="clear" onClick={deleteAll}>
                        <img src={clear}></img>
                    </button>
                </div>
            </div>
        
    )
}

export default ContainerCart;