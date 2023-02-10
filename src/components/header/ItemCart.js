import "../../styles/itemCart.css";
import deleteWhite from "../../img/deleteWhite.png"
import { useContext } from "react";
import { CartContext } from "../../contexts/cartContext";

const ItemCart = ( {id, title, image, price, cantidad } ) => {

    const { deleteProduct } = useContext(CartContext)
    
    return (
        <div className="itemCart">

            <div className="img">
                <img src={image}></img>
            </div>

            <div className="description-cantidad">
                <span className="title">{title}</span>
                <span className="quantity">{`cantidad: ${cantidad}`}</span>
            </div>

            <div className="price">
                <span className="subtotal">Subtotal</span>
                <span className="price">${price * cantidad}</span>
            </div>

            <button className="delete" onClick={ () => deleteProduct(id) }>
                <img src={deleteWhite}></img>
            </button>
        </div>
    )
}

export default ItemCart;