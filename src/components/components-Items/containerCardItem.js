import CardItem from "./CardItem";
import fetchSimulation from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import { useState, useEffect } from "react";
import "../../styles/containerCardItems.css";
import { useParams } from "react-router-dom";

const ContainerCardItem = () => {
  const [datos, setDatos] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    fetchSimulation(productos, 2000)
      .then((resp) => setDatos(resp))
      .catch((error) => console.log(error));
    console.log("idCategory: ", idCategory);
  }, []);

  useEffect(() => {
    console.log("idCategory: ", idCategory);
    if (idCategory) {
      fetchSimulation(
        productos.filter((filter) => filter.type == idCategory),
        2000
      )
        .then((resp) => setDatos(resp))
        .catch((error) => console.log(error));
    } else {
      fetchSimulation(productos, 2000)
        .then((resp) => setDatos(resp))
        .catch((error) => console.log(error));
    }
  }, [idCategory]);

  return (
    <div className="containerCardItems">
      {datos?.map((products) => (
        <CardItem
          id={products.id}
          imagen={products.img}
          title={products.title}
          stock={products.stock}
          price={products.price}
        />
      ))}
    </div>
  );
};

export default ContainerCardItem;
