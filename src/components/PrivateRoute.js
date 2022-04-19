import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

//Para la creacion de una ruta privada. Este regresara una ruta que nosotros le asignaremos props que manipularemos para saber si necesitamos renderizar o no.

const PrivateRoute = () => {
  //Simular autentificacion.
  let auth;
  auth = true;
  auth = null;

  return (
    auth ? <Outlet /> : <Navigate to="/login" />
  );
} //Aqui solo encapsulamos la logica del router en una funcion PrivateRoute.

export default PrivateRoute;