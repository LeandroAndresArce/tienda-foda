import Brand from "./Brand";
import ItemListContainer from "./ItemListContainer";
import CartWiget from "./CartWidget";

const NavBar = () =>{
return(
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
    </header>

    )

}

export default NavBar;