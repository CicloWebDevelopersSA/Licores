import React from 'react';
import { venta } from '../data/dataVentas';
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function VentaLicores() {
    return <>
     <Header />

        <div class="container">
            <br></br>
            <h1 class="text-center">Ventas de Licores</h1>
            <table className='table table-dark'>
                <thead className='table-info'>
                    <tr>
                        <th>Id Venta</th>
                        <th>Fecha</th>
                        <th>Id Cliente</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
              
                <tbody>

                    {venta.map((item) => {
                        return(
                  <> 
                  <tr key={item.idventa}>
                    <td>{item.idventa}</td>
                    <td>{item.fecha}</td>
                    <td>{item.idcliente}</td>
                    <td>{item.name}</td>
                    <td>{item.prise}</td>
                    <td>{item.cantidad}</td>
                    <td>{item.total}</td>
                    </tr>
                   </>
                        );

                    })}
                    
                </tbody>
            </table>
            
        </div>
        <Footer/>
    </>
    
}