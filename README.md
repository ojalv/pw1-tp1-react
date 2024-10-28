# PROGRAMACIÓN WEB 1

**Profesor**: Pablo Aronna

**Alumno**: Alvaro Nicolas Ojeda

## TRABAJO PRACTICO

Una tienda en línea almacena información sobre sus productos y los pedidos realizados por sus
clientes. Los datos están organizados en dos vectores de objetos JSON.

Crear los objetos en archivos separados y en una carpeta llamada DATA

1. El vector `productos` contiene los siguientes campos:
   - `idProducto` (number): un identificador único para cada producto.
   - `nombreProducto` (string): el nombre del producto.
   - `precio` (number): el precio del producto.

```javascript
const productos = [
    { idProducto: 1, nombreProducto: "Laptop", precio: 1500 },
    { idProducto: 2, nombreProducto: "Teclado", precio: 50 },
    { idProducto: 3, nombreProducto: "Mouse", precio: 30 },
    { idProducto: 4, nombreProducto: "Monitor", precio: 200 },
    { idProducto: 5, nombreProducto: "Impresora", precio: 120 }
];
```

2. El vector `clientes` contiene la siguiente información:
   - `idCliente` (number): un identificador único para cada cliente.
   - `nombreCliente` (string): el nombre del cliente.

```javascript
const clientes = [
    { idCliente: 1, nombreCliente: "Carlos Ruiz" },
    { idCliente: 2, nombreCliente: "Lucía Gómez" },
    { idCliente: 3, nombreCliente: "Martín Díaz" }
];
```

3. El vector pedidos contiene la siguiente información:
• idPedido (number): un identificador único para cada pedido.
• idCliente (number): el identificador del cliente que realizó el pedido.
• productos (array): un array de objetos que contiene los productos comprados en el
pedido, con sus idProducto y la cantidad comprada.

```javascript
const pedidos = [
    { idPedido: 101, idCliente: 1, productos: [{ idProducto: 1, cantidad: 2 }, { idProducto: 2, cantidad: 1 }] },
    { idPedido: 102, idCliente: 2, productos: [{ idProducto: 3, cantidad: 2 }, { idProducto: 4, cantidad: 1 }] },
    { idPedido: 103, idCliente: 1, productos: [{ idProducto: 5, cantidad: 1 }] },
    { idPedido: 104, idCliente: 3, productos: [{ idProducto: 1, cantidad: 1 }, { idProducto: 3, cantidad: 3 }] },
    { idPedido: 105, idCliente: 2, productos: [{ idProducto: 2, cantidad: 1 }, { idProducto: 4, cantidad: 2 }] },
    { idPedido: 106, idCliente: 1, productos: [{ idProducto: 3, cantidad: 4 }, { idProducto: 5, cantidad: 2 }] }
];
```

## Ejercicios

Crear un componente para cada ejercicio. Importar los vectores en el componente APP y pasarlo por props a cada componente.

1. **Ejercicio 1**: Escribe una función `encontrarProducto`, que recibe el `idProducto`, y
   retorna el objeto que corresponde al producto buscado.

2. **Ejercicio 2**: Escribe una función `productosPorPedido` que reciba el `idPedido` y
   retorne un array con los nombres de los productos incluidos en el pedido. Si el pedido no
   existe, la función deberá retornar un array vacío.

3. **Ejercicio 3**: Escribe una función `importeTotalPedido` que reciba el `idPedido` y
   retorne el total de dinero de la compra. Si no se encuentra el pedido, la función debe retornar
   `null`.

4. **Ejercicio 4**: Escribe una función `gastoTotalCliente` que reciba el `idCliente` y
   retorne el total de dinero que ha gastado el cliente en todos sus pedidos. Si no ha realizado
   ningún pedido, la función debe retornar `0`.

5. **Ejercicio 5**: Escribe una función `clienteConMayorGasto` que determine cuál
   cliente ha gastado más dinero en la tienda. La función debe retornar un objeto con el
   `nombreCliente` y el `total` gastado.