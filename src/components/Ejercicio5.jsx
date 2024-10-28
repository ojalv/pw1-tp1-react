//Ejercicio 4: Escribe una función clienteConMayorGasto que 
//determine cuál cliente ha gastado más dinero en la tienda. 
//La función debe retornar un objeto con el nombreCliente y el total gastado.
import { useState } from "react"

const ClienteMayorGasto = ({ clienteGastador }) => {
	if (clienteGastador) {

		return (
			<>
				<h3>Cliente mas gastador</h3>
				<p>Nombre: {clienteGastador.nombreCliente}</p>
				<p>Monto Total Gastado: {clienteGastador.totalGastado}</p>
			</>
		)

	} else if (clienteGastador === null) {
		return (<p>Aqui se veran los datos del cliente mas gastador</p>)
	} else if (clienteGastador === undefined) {
		return (<p>Cliente inexistente</p>)
	}
}


export const Ejercicio5 = ({ productos, pedidos, clientes }) => {

	const gastoTotalCliente = (idCliente) => {
		const cliente = clientes.find(c => c.idCliente === parseInt(idCliente))
		if (cliente) {//el cliente existe
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
				return { totalGastado: total, nombreCliente: cliente.nombreCliente } //retorna el total gastado del cliente y su nombre
			} else {
				return 0 //retorna 0, el cliente no tiene pedidos
			}
		} else {//el cliente no existe
			console.error("cliente inexistente")
		}

	}

	const clienteConMayorGasto = () => {
		let clienteGastador = null
		const gastosClientes = clientes.map(cliente => gastoTotalCliente(cliente.idCliente))
		gastosClientes.forEach(cliente => {
			if (clienteGastador === null) {
				clienteGastador = cliente
			} else {
				if (clienteGastador.totalGastado < cliente.totalGastado) {
					clienteGastador = cliente
				}
			}
		})
		return clienteGastador
	}


	const manejarSubmit = (evento) => {
		evento.preventDefault();//previene el submit del formulario
		setClienteGastador(clienteConMayorGasto())//ejecuta la funcion clienteConMayorGasto
	}

	const [clienteGastador, setClienteGastador] = useState(null)

	return (
		<section id="Ejercicio-5">
			<form
				onSubmit={(evento) => manejarSubmit(evento)}>
				<span>Cliente que ha gastado más dinero en la tienda</span><input type="submit" name="submit" id="" value="buscar" />
				<ClienteMayorGasto clienteGastador={clienteGastador} />
			</form>
		</section>
	)
}
