import ContainerCardItem from './components/components-Items/containerCardItem';
import NavBar from './components/header/NavBar';
import './style.css';

function App() {
  return (
    <>
    <NavBar />
    <ContainerCardItem />
    <div style={{width: "100%", textAlign: "center", padding: "4rem"}}>
        <h1 style={{fontSize: "15px"}}>Hasta 3 cuotas sin interes. Compra minima de $20.000</h1>
    </div>
    </>
    );
}

export default App;