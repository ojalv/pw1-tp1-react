//Ejercicio 4: Escribe una función gastoTotalCliente que reciba el idCliente y 
//retorne el total de dinero que ha gastado el cliente en todos sus pedidos. 
//Si no ha realizado ningún pedido, la función debe retornar 0.

import { useState } from "react"

const TotalCliente = ({ totalCliente }) => {
	if (totalCliente) {

		if (totalCliente == 0) {
			return (
				<>
					<h3>El cliente no realizo pedidos</h3>
				</>
			)
		} else {
			return (
				<>
					<h3>Importe Total Gastado por el Cliente</h3>
					<p>
						${totalCliente}
					</p>
				</>
			)
		}


	} else if (totalCliente === null) {
		return (<p>Aqui se vera el importe total gastado por el cliente</p>)
	} else if (totalCliente === undefined) {
		return (<p>Cliente inexistente</p>)
	}
}

export const Ejercicio4 = ({ productos, pedidos, clientes }) => {

	const gastoTotalCliente = (idCliente) => {
		if (clientes.find(c => c.idCliente === parseInt(idCliente))) {//el cliente existe
			//filtra los pedidos que tiene el cliente idCliente
			const pedidosCliente = pedidos.filter((pedido) => pedido.idCliente === parseInt(idCliente))

			if (pedidosCliente.length > 0) {
				let total = null
				pedidosCliente.forEach(pedido => {//recorre todos los pedidos del cliente
					//array con los subtotales de los productos del pedido
					const subtotalProductos = pedido.productos.map(item => {//mapea los productos del pedido como items
						const producto = productos.find(p => p.idProducto === item.idProducto)//busca el producto que coincide con el id del item y lo almacena en una constante
						return producto ? producto.precio * item.cantidad : null//condicion de retorno del map, retorna el subtotal del producto o null
					}).filter(nombre => nombre != null)//limpia los null luego de hacer el map

					subtotalProductos.forEach(subTotal => {//suma los subtotales del pedido en el total
						total += subTotal
					});
				})
				return total
			} else {
				return 0 //retorna 0, el cliente no tiene pedidos
			}
		} else {//el cliente no existe
			console.error("cliente inexistente")
		}

	}

	const [campoBusqueda, setCampoBusqueda] = useState("")// almacena el valor del campo de busqueda

	const [totalCliente, setTotalCliente] = useState(null)

	const manejarSubmit = (evento, campoBusqueda) => {
		evento.preventDefault();//previene el submit del formulario
		evento.target.elements["campoBusqueda"].value = ""//limpia el campo de busqueda
		setTotalCliente(gastoTotalCliente(campoBusqueda))//ejecuta la funcion gastoTotalCliente e imprime el resultado en consola
	}

	return (
		<section id="Ejercicio-4">
			<h2>Ejercicio 4</h2>
			<p>Escribe el ID del cliente para ver el gasto total de sus pedidos</p>
			<form
				onSubmit={(evento) => manejarSubmit(evento, campoBusqueda)}>
				<input type="text" name="campoBusqueda" autoComplete="off" placeholder="ingresa el id del cliente" onChange={(event) => { setCampoBusqueda(event.target.value) }} />
				<input type="submit" name="submit" id="" value="buscar" />
				<TotalCliente totalCliente={totalCliente} />
			</form>
		</section>
	)
}
