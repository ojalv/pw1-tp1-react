import { productos } from "./data/productos";
import { pedidos } from "./data/pedidos";
import { Ejercicio1 } from "./components/Ejercicio1";
import { Ejercicio2 } from "./components/Ejercicio2";
function App() {
  return (
    <>
      <Ejercicio1 productos={JSON.parse(productos)} />
      <Ejercicio2 productos={JSON.parse(productos)} pedidos={JSON.parse(pedidos)} />
    </>
  );
}

export default App;
