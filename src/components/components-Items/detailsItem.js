import Image from "./image";
import Description from "./description";
import AddCantCart from "./AddCantCart";
import ButtonDetalles from "./ButtonDetalles";
import fetchSimultion from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const DetailsItem = () => {
    const [ datos, setDatos ] = useState([]);
    const { idItem } = useParams();
    
    useEffect(() => {
        fetchSimultion(productos.filter( flt => flt.id == idItem), 2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [idItem])
    
    return(
        <div className="detailsItem">
            {
                datos.map( items => (
                   <>
                    <div className="containerLeft">
                        <Image 
                            imagen={items.imageProduct.firtsImage}
                        />
                    </div>  

                    <div className="containerRigth">
                            <Description 
                                title= {items.title}
                                parrafo= {items.description}
                                cantidad = {items.stock}
                                precio={items.price}
                            />
                        <div className="buttons">
                                <AddCantCart 
                                    cant={5}
                                />

                                <ButtonDetalles 
                                    txt="Agregar al carrito"
                                />
                        </div>
                    </div>
                   </>
                ))
            }
        </div>
    )
}

export default DetailsItem;