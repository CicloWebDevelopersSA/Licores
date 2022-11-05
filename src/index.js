import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App/App';
import Licores2 from './components/App/Licores2.js';
import * as boostrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Pages/Administrador/Home';
import Lista from './Pages/Administrador/ListaProductos';
import VentaLicores from './Pages/Administrador/ListaVentas';
import { ModificarProductos } from './Pages/Administrador/ModificarProductos';
import Compras from './Pages/Cliente/CarritoCompras';
import { CrearProductos } from './Pages/Administrador/CrearProductos';
import ListaC from './Pages/Cliente/ListarProductosC';


//import {Ap} from './nuevaPag.js';
//import './nuevaPag.css';

//RENDERIZACION
/*
ReactDOM.createRoot(document.getElementById('root')).render(

    <React.StrictMode>
        <Ape/>
    </React.StrictMode>
)
*/
//ME SIRVE PARA PASAR DE UNA PAGINA A OTRA
const rootElement = document.getElementById("root")
render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="/licores2" element={<Licores2 />} />
            <Route path="/home" element={<Home />} />
            <Route path="/listaproductosA" element={<Lista />} />
            <Route path="/listaproductos" element={<ListaC />} />
            <Route path="/ventas" element={<VentaLicores />} />
            <Route path="/modificar" element={<ModificarProductos />} />
            <Route path="/crear" element={<CrearProductos />} />
            <Route path="/compras" element={<Compras />} />
        </Routes>

    </BrowserRouter>
)

