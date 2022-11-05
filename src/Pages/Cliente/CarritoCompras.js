import React from "react";
import { comprasLista } from "../../data/dataCompras";
import HeaderC from "../../components/HeaderC";
import Footer from "../../components/Footer";

export default function Compras() {
    return <>
        <HeaderC />

        <div class="container">
            <br></br>
            <h2 class="text-center">Carrito de compras</h2>
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
                        return (
                            <>
                                <tr key={item.idVenta}>

                                    <td width='20%'><img src={item.image} width='30%' height='auto' /></td>
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
            <div class="row w-100 align-items-center">
    			<div class="col text-center">
    				<button class="btn btn-dark">Finalizar Compra  </button> 
                    <button className="btn btn-dark" type="button">
                    Cancelar
                </button>
    			</div>	
    		</div>
            
      

        </div>
        <Footer />
    </>
}