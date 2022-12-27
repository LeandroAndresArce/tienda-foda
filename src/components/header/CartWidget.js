import cart from "../../img/carrito.png"

const CartWiget = () =>{
    return(
        <div className="containerLenght">
            <img src={cart} alt="cart"></img>
            <span className="cantCard">
            1
            </span>
        </div>
    )
    
}

export default CartWiget;