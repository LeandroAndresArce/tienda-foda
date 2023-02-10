import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWiget from "./CartWidget";
import ContainerCart from "./ContainerCart";
import ContextCart from "./ContextCart";

const NavBar = () =>{
return(
    <ContextCart>
        <header>
        <div className="containerBrand">
            <Brand  />
        </div>

        <nav className="containerItemList">
            <ItemListContainer 
                itemUno = "Hombres"
                itemDos = "Mujeres"
                itemTres = "Perfumes"
                itemCuatro = "Colecciones"
            />
        </nav>

        <div className="containerCart">
            <CartWiget />
        </div>
        <ContainerCart />
        </header>
    </ContextCart>
    )

}

export default NavBar;