import { Link } from "react-router-dom"

const ItemListContainer = (props) =>{
    return(
        <ul>
            <li>
                <Link to="category/Hombres">
                {props.itemUno}
                </Link>
            </li>
            <li>
                <Link to="category/Mujeres">
                {props.itemDos}
                </Link>
            </li>              
            <li>
                <Link to="category/Perfumes">
                {props.itemTres}
                </Link>
            </li>
            <li>
                <Link to="category/Colecciones" >
                {props.itemCuatro}
                </Link>
            </li>
        </ul>
    )
}

export default ItemListContainer;
