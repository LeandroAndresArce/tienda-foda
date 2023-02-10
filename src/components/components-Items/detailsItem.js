import Image from "./image";
import Description from "./description";
import AddCantCart from "./AddCantCart";
import ButtonDetalles from "./ButtonDetalles";
import fetchSimultion from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "../../styles/detailItem.css"

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
                datos?.map( items => (
                   <>
                    <div className="containerLeft">
                        <Image 
                            imagen={items.img}
                        />
                    </div>  

                    <div className="containerRight">
                            <Description 
                                title= {items.title}
                                parrafo= {items.description}
                                stock = {items.stock}
                                price={items.price}
                            />
                        <div className="buttons">
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