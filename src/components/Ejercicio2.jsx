//Ejercicio 2: Escribe una función productosPorPedido que reciba el idPedido y 
//retorne un array con los nombres de los productos incluidos en el pedido. 
//Si el pedido no existe, la función deberá retornar un array vacío.

import { useState } from "react"

export const Ejercicio2 = ({ productos, pedidos }) => {

	const productosPorPedido = (idPedido) => {
		//busca el pedido que su id coincida con el parametro idPedido
		const pedido = pedidos.find((p) => p.idPedido === parseInt(idPedido))

		//retorna un array con los nombres de los productos incluidos en el pedido
		if (pedido) {
			const nombresProductos = pedido.productos.map(item => {//mapea los productos del pedido como items
				const producto = productos.find(p => p.idProducto === item.idProducto)//busca el producto que coincide con el id del item y lo almacena en una constante
				return producto ? producto.nombreProducto : null//condicion de retorno del map, retorna el nombre del producto o null
			}).filter(nombre => nombre != null)//limpia los null luego de hacer el map
			return nombresProductos
		}

		return [] //si el pedido no existe retorna un array vacio
	}

	const [campoBusqueda, setCampoBusqueda] = useState("")// almacena el valor del campo de busqueda

	const manejarSubmit = (evento, campoBusqueda) => {
		evento.preventDefault();//previene el submit del formulario
		evento.target.elements["campoBusqueda"].value = "" //limpia el campo de busqueda
		console.log(productosPorPedido(campoBusqueda)) //ejecuta la funcion productosPorPedido e imprime el resultado en consola
	}

	return (
		<section id="Ejercicio-2">
			<form
				onSubmit={(evento) => manejarSubmit(evento, campoBusqueda)}>
				<input type="text" name="campoBusqueda" autoComplete="off" placeholder="ingresa el id del pedido" onChange={(event) => { setCampoBusqueda(event.target.value) }} />
				<input type="submit" name="submit" id="" value="buscar" />
				<div></div>
			</form>
		</section>
	)
}
