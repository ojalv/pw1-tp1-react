import { productos } from "./data/productos";
import { pedidos } from "./data/pedidos";
import { clientes } from "./data/clientes";
import { Ejercicio1 } from "./components/Ejercicio1";
import { Ejercicio2 } from "./components/Ejercicio2";
import { Ejercicio3 } from "./components/Ejercicio3";
import { Ejercicio4 } from "./components/Ejercicio4";
function App() {
  return (
    <>
      <Ejercicio1 productos={JSON.parse(productos)} />
      <Ejercicio2 productos={JSON.parse(productos)} pedidos={JSON.parse(pedidos)} />
      <Ejercicio3 productos={JSON.parse(productos)} pedidos={JSON.parse(pedidos)} />
      <Ejercicio4 productos={JSON.parse(productos)} pedidos={JSON.parse(pedidos)} clientes={JSON.parse(clientes)}/>
    </>
  );
}

export default App;
