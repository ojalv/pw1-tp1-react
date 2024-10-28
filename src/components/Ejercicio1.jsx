//Ejercicio 1: Escribe una función `encontrarProducto`, que recibe el `idProducto`, y
//retorna el objeto que corresponde al producto buscado.

import { useState } from "react"

export const Ejercicio1 = ({ productos }) => {

	const encontrarProducto = (idProducto) => {
		// si se encuentra el producto, lo retorna
		// si no lo encuentra, retorna undefined
		return productos.find((p) => p.idProducto === parseInt(idProducto))
	}

	const [campoBusqueda, setCampoBusqueda] = useState("")// almacena el valor del campo de busqueda

	const manejarSubmit = (evento, campoBusqueda) => {
		evento.preventDefault();//previene el submit del formulario
		evento.target.elements["campoBusqueda"].value = "" //limpia el campo de busqueda
		console.log(encontrarProducto(campoBusqueda)) //ejecuta la funcion encontrar producto e imprime el resultado en consola
	}

	return (
		<section id="Ejercicio-1">
			<form
				onSubmit={(evento) => manejarSubmit(evento, campoBusqueda)}>
				<input type="text" name="campoBusqueda" id="" placeholder="ingresa el id del pruducto" onChange={(event) => { setCampoBusqueda(event.target.value) }} />
				<input type="submit" name="submit" id="" value="buscar" />
				<div></div>
			</form>
		</section>
	)
}
