import React, { useState } from "react";
import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header";
import Footer from "./Footer";

export function CrearProductos() {

    return (
        <>
            <Header />
            <div className="w-25 border m-5 p-3 " classname="text-center">
                <form>
                    <fragment classname="text-center">
                        <center>
                            <div className="form-group" id="divProductos" classname="text-center">
                                <h3 className="text-primary"> Crear Productos</h3>
                                <label className="d-block">
                                    Nombre
                                    <input className="w-100" type="text" />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="d-block">
                                    Descripción
                                    <input className="w-100" type="Usertext" />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="d-block">
                                    Cantidad
                                    <input className="w-100" type="number" />
                                </label>
                            </div>
                            <div className="form-group">
                                <label className="d-block">
                                    Valor Unitario
                                    <input className="w-100" type="number" />
                                </label>
                            </div>
                            <div className="form-group">
                                <button
                                    className="btn btn-primary mt-3"
                                    onclick="{this.CrearProductos}"
                                >
                                    Crear Stock
                                </button>
                            </div>
                        </center>
                    </fragment>
                </form>
            </div>

            <Footer />
        </>
    );

    function CrearProductos() {

    }

}