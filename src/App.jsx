import { productos } from "./data/productos";
import { Ejercicio1 } from "./components/Ejercicio1";
function App() {
  return (
    <>
      <Ejercicio1 productos = {JSON.parse(productos)}/>
    </>
  );
}

export default App;
