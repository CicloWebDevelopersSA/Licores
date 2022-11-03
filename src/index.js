import { render } from '@testing-library/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './components/App/App';
import Licores2 from './components/App/Licores2.js';
import * as boostrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './Pages/Home';
import Lista from './Pages/ListaProductos';
import VentaLicores from './Pages/Ventas';
import { ModificarProductos } from './components/ModificarProductos';
import Compras from './Pages/CarritoCompras';


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
            <Route path="/listaproductos" element={<Lista />} />
            <Route path="/ventas" element={<VentaLicores />} />
            <Route path="/modificar" element={<ModificarProductos />} />
            <Route path="/compras" element={<Compras />} />
        </Routes>

    </BrowserRouter>
)

