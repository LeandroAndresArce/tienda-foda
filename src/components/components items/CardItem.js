import Image from "./image";
import "../../styles/cardItem.css"
import Description from "./description";
import ButtonDetalles from "./ButtonDetalles";
import ButtonAddCart from "./ButtonAddCart";
import ImgPrueba from "../../img/ropa/coleccion-hombre.png"

const CardItem = () =>  {
    return(
        <div className="cardItems">
            <Image imagen ={ImgPrueba}/>
            <Description title="Coleccion de hombre" />
            <div className="Buttons"> 
            <ButtonDetalles />
            <ButtonAddCart />
            </div>

        </div>
    )
}

export default CardItem;