import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const MenuConceptos = () => {
const paddStyle = {
  padding: '10px',
};

  return (
		<nav id='Menu'>
			<ol>
				<li>
					<span>Enlaces html (no recomendado)</span>
					<br />
					<a className='MenuConceptos' href='/' style={paddStyle}>
						Home
					</a>
					<a className='MenuConceptos' href='/introduccion' style={paddStyle}>
						Introduccion
					</a>
					<a className='MenuConceptos' href='/instagram' style={paddStyle}>
						Contactame
					</a>
					<a className='MenuConceptos' href='/acerca' style={paddStyle}>
						Acerca
					</a>
				</li>

				<li>
					<span>Enlaces Link (recomendado)</span>
					<br />
					<Link className='MenuConceptos' to='/' style={paddStyle}>
						Home
					</Link>
					<Link className='MenuConceptos' to='/introduccion' style={paddStyle}>
						Introduccion
					</Link>
					<Link className='MenuConceptos' to='/instagram' style={paddStyle}>
						Contactame
					</Link>
					<Link className='MenuConceptos' to='/acerca' style={paddStyle}>
						Acerca
					</Link>
					<Link className='MenuConceptos' to='/laWea' style={paddStyle}>
						Error404
					</Link>
				</li>

				<li>
					<span>Enlaces NavLink (recomendado)</span>
					<br />
					<NavLink classactiveclassname='active' to='/' style={paddStyle}>
						Home
					</NavLink>
					<NavLink activeclassname='active' to='/introduccion' style={paddStyle}>
						Introduccion
					</NavLink>
					<NavLink activeclassname='active' to='/instagram' style={paddStyle}>
						Contactame
					</NavLink>
					<NavLink activeclassname='active' to='/acerca' style={paddStyle}>
						Acerca
					</NavLink>
					<NavLink activeclassname='active' to='/laWea' style={paddStyle}>
						Error404
					</NavLink>
				</li>

				<li>
					<span>Parametros</span>
					<br />
					<NavLink activeclassname='active' to='/usuario/Lukita' style={paddStyle}>
						Lukita
					</NavLink>
					<NavLink activeclassname='active' to='/usuario/ChistoPerez' style={paddStyle}>
						Nene
					</NavLink>
					<NavLink activeclassname='active' to='/usuario/Galleta' style={paddStyle}>
						Galleta
					</NavLink>
				</li>

				<li>
					<span>Parametros de Consulta</span>
					<br />
					<Link style={paddStyle} to='/productos'>
						Productos
					</Link>
				</li>

				<li>
					<span>Redirecciones</span>
					<br />
					<Link to='/product' style={paddStyle}>
						Product
					</Link>
					<Link to='/about' style={paddStyle}>
						About
					</Link>
				</li>

				<li>
					<span>Rutas Anidadas</span>
					<br />
					<Link to='/react' style={paddStyle}>
						React
					</Link>
				</li>

				<li>
					<span>Rutas Privadas</span>
					<br />
					<Link to='dashboard' style={paddStyle}>
						Dashboard
					</Link>
					<Link to='login' style={paddStyle}>
						Login
					</Link>
				</li>
			</ol>
		</nav>
	);
} //Html No se recomienda por que renderiza toda la pagina.

export default MenuConceptos;