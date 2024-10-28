//Ejercicio 1: Escribe una función `encontrarProducto`, que recibe el `idProducto`, y
//retorna el objeto que corresponde al producto buscado.

import { useState } from "react"

const InfoProducto = ({ producto }) => {
	if (producto) {
		const { idProducto, nombreProducto, precio } = producto
		return (
			<div id="infoProducto">
				<h3>Informacion del Producto</h3>
				<p>ID: {idProducto}</p>
				<p>NOMBRE: {nombreProducto}</p>
				<p>PRECIO: ${precio}</p>
			</div>
		)
	} else if (producto === null) {
		return (<p>Aqui se veran los detalles del producto</p>)
	} else if (producto === undefined) {
		return (<p>Producto inexistente</p>)
	}

}

export const Ejercicio1 = ({ productos }) => {

	const encontrarProducto = (idProducto) => {
		// si se encuentra el producto, lo retorna
		// si no lo encuentra, retorna undefined
		return productos.find((p) => p.idProducto === parseInt(idProducto))
	}

	const [campoBusqueda, setCampoBusqueda] = useState("")// almacena el valor del campo de busqueda
	const [producto, setProducto] = useState(null)
	const manejarSubmit = (evento, campoBusqueda) => {
		evento.preventDefault();//previene el submit del formulario
		evento.target.elements["campoBusqueda"].value = "" //limpia el campo de busqueda
		setProducto(encontrarProducto(campoBusqueda)) //ejecuta la funcion encontrar producto e imprime el resultado en consola

	}

	return (
		<section id="Ejercicio-1">
			<h2>Ejercicio 1</h2>
			<p>Escribe el ID del producto que deseas encontrar</p>
			<form
				onSubmit={(evento) => manejarSubmit(evento, campoBusqueda)}
				autoComplete="off">
				<input type="text" name="campoBusqueda" id="" placeholder="ingresa el id del pruducto" onChange={(event) => { setCampoBusqueda(event.target.value) }} />
				<input type="submit" name="submit" id="" value="buscar" />
				<InfoProducto producto={producto} />
			</form>
		</section>
	)
}
