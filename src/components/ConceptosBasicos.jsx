import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Header from '../pagesLuka/Header';
import Home from '../pagesLuka/Home';
import Introduccion from '../pagesLuka/Introduccion';
import Redes from '../pagesLuka/Redes';
import Acerca from '../pagesLuka/Acerca';
import Error404 from '../pagesLuka/Error404';
import Usuario from '../pagesLuka/Usuario';
import Productos from '../pagesLuka/Productos';
import ReactTopics from '../pagesLuka/ReactTopics';
import Login from '../pagesLuka/Login';
import Dashboard from '../pagesLuka/Dashboard';
import PrivateRoute from './PrivateRoute';
//React Router Dom.



const ConceptosBasicos = () => {
  return (
		<div>
			<Header />
			<Routes>
				<Route exact path='/' element={<Home />} />
				<Route exact path='/introduccion' element={<Introduccion />} />
				<Route exact path='/instagram' element={<Redes />} />
				<Route exact path='/acerca' element={<Acerca />} />
				<Route path='*' element={<Error404 />} />
				<Route exact path='/usuario/:username' element={<Usuario />} />
				<Route exact path='/productos' element={<Productos />} />

				<Route exact path='/product' element={<Navigate to='/productos' />} />
				<Route exact path='/about' element={<Navigate to='/acerca' />} />

				<Route path='/react/*' element={<ReactTopics />}></Route>

				<Route exact path='/login' element={<Login />}></Route>
				<Route path='/dashboard' element={<PrivateRoute />}>
					<Route path='/dashboard' element={<Dashboard />} />
				</Route>
			</Routes>
		</div>
	);
};

export default ConceptosBasicos;