import React from 'react';

const Redes = () => {
  return (
		<div>
			<a href='https://github.com/LukitaChan' target='_blank' rel='noopener noreferrer'>
				<button className='boton'>
					<i className='fa fa-github' aria-hidden='true'></i> Github
				</button>
			</a>

			<a href='https://codepen.io/lucy-chable' target='_blank' rel='noopener noreferrer'>
				<button className='boton'>
					<i className='fa fa-codepen'></i> Codepen
				</button>
			</a>

			<a href='https://www.instagram.com/lukitachan/' target='_blank' rel='noopener noreferrer'>
				<button className='boton'>
					<i className='fa fa-instagram'></i> Instagram
				</button>
			</a>

			<a href='https://myfigurecollection.net/profile/Lukarita' target='_blank' rel='noopener noreferrer'>
				<button className='boton'>
					<i className='fa fa-birthday-cake'></i> MyfigureCollection
				</button>
			</a>

			<img
				className='boton2'
				src='https://i.pinimg.com/originals/01/23/b8/0123b8e3c844782f20b129d16152b3ea.gif'
				alt='cute dog'
				width={200}
			/>
		</div>
	);
}

export default Redes;