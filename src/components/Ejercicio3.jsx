//Ejercicio 3:  Escribe una función importeTotalPedido que reciba
//el idPedido y retorne el total de dinero de la compra. 
//Si no se encuentra el pedido, la función debe retornar null.

import { useState } from "react"

export const Ejercicio3 = ({ productos, pedidos }) => {

	const importeTotalPedido = (idPedido) => {
		//busca el pedido que su id coincida con el parametro idPedido
		const pedido = pedidos.find((p) => p.idPedido === parseInt(idPedido))

		if (pedido) {
			let total = null
			//array con los subtotales de los productos del pedido
			const subtotalProductos = pedido.productos.map(item => {//mapea los productos del pedido como items
				const producto = productos.find(p => p.idProducto === item.idProducto)//busca el producto que coincide con el id del item y lo almacena en una constante
				return producto ? producto.precio * item.cantidad : null//condicion de retorno del map, retorna el subtotal del producto o null
			}).filter(nombre => nombre != null)//limpia los null luego de hacer el map

			subtotalProductos.forEach(subTotal => {
				total += subTotal
			});
			return total
		}

		return null//si el pedido no existe retorna null
	}

	const [campoBusqueda, setCampoBusqueda] = useState("")// almacena el valor del campo de busqueda

	const manejarSubmit = (evento, campoBusqueda) => {
		evento.preventDefault();//previene el submit del formulario
		evento.target.elements["campoBusqueda"].value = ""//limpia el campo de busqueda
		console.log(importeTotalPedido(campoBusqueda))//ejecuta la funcion importeTotalPedido e imprime el resultado en consola
	}

	return (
		<section id="Ejercicio-3">
			<form
				onSubmit={(evento) => manejarSubmit(evento, campoBusqueda)}>
				<input type="text" name="campoBusqueda" autoComplete="off" placeholder="ingresa el id del pedido" onChange={(event) => { setCampoBusqueda(event.target.value) }} />
				<input type="submit" name="submit" id="" value="buscar" />
				<div></div>
			</form>
		</section>
	)
}
