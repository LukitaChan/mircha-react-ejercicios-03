import React from 'react';

const Introduccion = () => {
  return (
		<div className="intro">
			<h2>Conceptos Basicos</h2>
			<p>
				Un React Router DOM es un tipo de contenedor en el cual dependiendo de la ruta que queramos mostrar sera la que
				se visualize.
			</p>
			<p>
				El componente padre de React Router DOM es "BrowserRouter". En este caso, le daremos el alias de "Router". En
				este componente irian las rutas que queremos cargar en el DOM.
			</p>
			<p>
				Para poder cargar una ruta, llamamos al componente "Route". Las Rutas son componentes que reciben ciertas
				propiedades, siendo la mas importante "Path".
			</p>
		</div>
	);
};

export default Introduccion;