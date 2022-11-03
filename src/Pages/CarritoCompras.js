import React from "react";
import { comprasLista } from "../data/dataCompras";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Compras(){
    return <>
     <Header />

    <div class="container">
    <h1 class="text-center">Carrito de compras</h1>
         <table className='table table-dark'>
                <thead className='table-info'>
                    <tr>
                        <th>Imagen</th>
                        <th>Cantidad</th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>

                    {comprasLista.map((item) => {
                        return(
                  <> 
                  <tr key={item.idVenta}>
                  
                    <td width='20%'><img src={item.image} width='30%' height='auto'/></td>
                    <td>{item.cantidad}</td>
                    <td>{item.producto}</td>
                    <td>{item.precio}</td>
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