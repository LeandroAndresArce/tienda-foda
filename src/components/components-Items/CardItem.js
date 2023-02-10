import Image from "./image";
import "../../styles/cardItem.css"
import Description from "./description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";
import {Link} from "react-router-dom";

const CardItem = (props) =>  {
    return(
        <div className="cardItems">
            <Image 
                imagen ={props.imagen}
                />
            <Description 
                title={props.title}
                stock={props.stock}
                price={props.price}
                 />
            <div className="Buttons"> 

                <Link to={ `/item/${props.id}` }>
                    <ButtonDetalles 
                        txt="Ver detalles"
                    />

                </Link>
            
                <ButtonAddCart
                    id={props.id}
                />
            </div>
        </div>
    )
}

export default CardItem;