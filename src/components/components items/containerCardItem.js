import CardItem from "./CardItem"
import fetchSimulation from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import { useState, useEffect } from "react";
import "../../styles/containerCardItems"


const containerCardItem = () =>{
    const[ datos, setDatos ] = useState ( [] );
    
    useEffect (() =>{
        fetchSimulation(productos,2000)
        .then(resp => setDatos(resp))
        .catch(error => console.log(error))
    }, [])

    return(
        <div className="containerCardItems">
            {
                datos.map( products =>(
                    <CardItem
                        key={products.id}
                        imagen={products.imag}
                        title={products.title}
                        cantidad={products.cantidad}
                        precio={products.precio}
                    />
                ))
            }
        
        </div>
    )
}

export default containerCardItem;