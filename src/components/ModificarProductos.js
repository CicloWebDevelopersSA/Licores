import React, { useState } from "react";
import { Fragment } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./Header";
import Footer from "./Footer";

export function ModificarProductos() {

    return (
        <>
            <Header />

            <div class="w-25 border m-5 p-3 ">
                <form>
                    <Fragment>
                        <center>
                            <div className="form-group" id="divProductos">
                                <h3 className="text-primary">Modificar Productos</h3>
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
  //
                            <div className="form-group">
                                <label className="d-block">
                                    Cantidad
                                    <input className="w-100" type="number" />
                                </label>
                            </div>
                            */
                            <div className="form-group">
                                <label className="d-block">
                                    Valor Unitario
                                    <input className="w-100" type="number" />
                                </label>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary mt-3" onclick="{CrearProductos}">
                                    Modificar
                                </button>
                            </div>
                        </center>

                    </Fragment>
                </form>
            </div>
            <Footer />
        </>
    );

    function ModificarProductos() {

    }
}