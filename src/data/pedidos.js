export const pedidos = JSON.stringify([
  {
    idPedido: 101,
    idCliente: 1,
    productos: [
      { idProducto: 1, cantidad: 2 },
      { idProducto: 2, cantidad: 1 },
    ],
  },
  {
    idPedido: 102,
    idCliente: 2,
    productos: [
      { idProducto: 3, cantidad: 2 },
      { idProducto: 4, cantidad: 1 },
    ],
  },
  { idPedido: 103, idCliente: 1, productos: [{ idProducto: 5, cantidad: 1 }] },
  {
    idPedido: 104,
    idCliente: 3,
    productos: [
      { idProducto: 1, cantidad: 1 },
      { idProducto: 3, cantidad: 3 },
    ],
  },
  {
    idPedido: 105,
    idCliente: 2,
    productos: [
      { idProducto: 2, cantidad: 1 },
      { idProducto: 4, cantidad: 2 },
    ],
  },
  {
    idPedido: 106,
    idCliente: 1,
    productos: [
      { idProducto: 3, cantidad: 4 },
      { idProducto: 5, cantidad: 2 },
    ],
  },
]);
