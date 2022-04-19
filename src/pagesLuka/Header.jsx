import * as React from 'react';
import { Link } from 'react-router-dom';

//Barra de navegacion.
const Header = () => {
  return (
		<div id='header-div'>
			<nav id='header-nav'>
				<Link id='header-link' to='/'>
					Home
				</Link>
				<br />
				<Link id='header-link' to='/introduccion'>
					Introduccion
				</Link>
				<br />
				<Link id='header-link' to='/instagram'>
					Contactame
				</Link>
				<br />
				<Link id='header-link' to='/acerca'>
					Acerca
				</Link>
			</nav>
		</div>
	);
}

export default Header;