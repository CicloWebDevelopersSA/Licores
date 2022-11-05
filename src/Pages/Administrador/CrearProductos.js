import React, { useState } from "react";
import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export function CrearProductos() {

    return (
        <>
            <Header />
            <br></br>
            <div className="container" text-center>
                <h2>Crear Productos</h2>
                <br>
                </br>
                <div className="row">
                    <div className="col">

                        <h3>Productos</h3>
                        <h4>Aguardiente</h4>
                        <h4>ron</h4>
                    </div>
                    <div className="col">Imagen</div>
                    <div className="col"> 
                    
                    <h4>Nombre: Aguardiente</h4>
                    <h4>Descripción: Trago blanco</h4>
                    <h4>Precio: 45.000</h4>
                    <h4>Stock: 3</h4>
                    </div>
                </div>
            </div>

       
            <Footer />
        </>
    );

    function CrearProductos() {

    }
}