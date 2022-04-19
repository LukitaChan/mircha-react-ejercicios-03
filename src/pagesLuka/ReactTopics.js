import React from 'react';
import { Link, Route, Routes, useParams } from 'react-router-dom';

//Rutas Anidadas.

const Topic = () => {
  let {topic} = useParams();
  let urlita = `${topic}`;

  //useParam es un hook que permite obtener los parametros de la url (tomamos el parametro topic de useParams).
  return (
		<div>
			<hr />
			<h4>{urlita.toUpperCase()}</h4>
			<p>
				Este es un parrafo que habla sobre <b>{urlita}</b> en React.
			</p>
			<p>Para mas informacion consulta la documentacion oficial.</p>
			<br />
			<img
				src="#"
				alt={urlita}
				width={200}
			/>
		</div>
	);
};

const ReactTopics = () => {
  return (
		<div>
			<h3>Temas de React</h3>
			<ul>
				<li>
					<Link to="jsx">JSX</Link>
				</li>
				<li>
					<Link to="propiedades">Propiedades</Link>
				</li>
				<li>
					<Link to="estado" >Estado</Link>
				</li>
				<li>
					<Link to="componentes">Componente</Link>
				</li>
			</ul>

      <Routes>
        <Route path=":topic" element={<Topic />} />
      </Routes>  
		</div>
	);
};

export default ReactTopics;