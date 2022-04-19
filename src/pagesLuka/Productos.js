import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

//Parametros de consulta.

const Productos = () => {
  //let location = useLocation();
  //console.log(location);
  //http://localhost:3000/productos?inicio=1&fin=20

  let {search} = useLocation();
  let query = new URLSearchParams(search);
  //console.log(query);

  //Paginacion.
  const LIMIT = 20;
  const TOTAL = 100;
  let start = parseInt(query.get('inicio')) || 1;
  let end = parseInt(query.get('fin')) || LIMIT;
  //console.log(start, end);

  //Botones de paginacion.
  let navigate = useNavigate();
  //console.log(navigate);

  const handleNext = (e) => {
      e.preventDefault();
      navigate(`/productos?inicio=${start + LIMIT}&fin=${end + LIMIT}`);
    };

  const handlePrev = (e) => {
    e.preventDefault();
      navigate(`/productos?inicio=${start-LIMIT}&fin=${end-LIMIT}`);
  };
  

  return (
		<div>
			<h2>Productos</h2>
			<img
				src='https://scontent.fmid2-1.fna.fbcdn.net/v/t39.30808-6/278396261_7561007903910132_4059008807698831809_n.jpg?_nc_cat=1&ccb=1-5&_nc_sid=9267fe&_nc_ohc=bgisX3FKSMkAX_6QRNO&_nc_ht=scontent.fmid2-1.fna&oh=00_AT8nu4BV-mcuwJbTmm8MjOphk6f71PfLKO-qNOqNvXDESg&oe=625FEF69'
				alt='Starbucks Vasos'
				width={250}
			/>
			<p>
				Productos de <b>{start}</b> al <b>{end}</b>
			</p>

			{start > LIMIT && (
				<button className='boton' onClick={handlePrev}>
					Atras
				</button>
			)}
			{end <= TOTAL && (
				<button className='boton' onClick={handleNext}>
					Adelante
				</button>
			)}
		</div>
	);
};

export default Productos;