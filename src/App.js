import ProviderContextCard from "./components/components-Items/ProviderContextCard";
import DetailsItem from "./components/components-Items/detailsItem";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ContainerCardItem from "./components/components-Items/ContainerCardItem";
import NavBar from "./components/header/NavBar";
import "./style.css";
import { CartProvider } from "./contexts/cartContext";

function App() {
  return (
    <>
      <CartProvider>
        <ProviderContextCard>
          <BrowserRouter>
            <NavBar />
            <Routes>
              <Route path="/" element={<ContainerCardItem />} />
              <Route path="/item/:idItem" element={<DetailsItem />} />
              <Route
                path="/category/:idCategory"
                element={<ContainerCardItem />}
              />
            </Routes>
          </BrowserRouter>
        </ProviderContextCard>
      </CartProvider>
      <div style={{ width: "100%", textAlign: "center", padding: "4rem" }}>
        <h1 style={{ fontSize: "15px" }}>
          Hasta 3 cuotas sin interes. Compra minima de $20.000
        </h1>
      </div>
    </>
  );
}

export default App;
