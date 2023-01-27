import Image from "./image";
import "../../styles/cardItem.css"
import Description from "./description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";

const CardItem = (props) =>  {
    return(
        <div className="cardItems">
            <Image 
                imagen ={PaymentResponse.imagen}
                />
            <Description 
                title={props.title}
                cantidad={props.cantidad}
                precio={20000}
                 />
            <div className="Buttons"> 
            <ButtonDetalles />
            <ButtonAddCart />
            </div>

        </div>
    )
}

export default CardItem;