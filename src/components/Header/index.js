import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";


export default function Header() {
    render()
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark text-white">
                <div className="container-fluid text-white">
                   
                    <button
                        className="navbar-toggler text-white"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                        text-white
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse text-white" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-white">
                            <li className="nav-item  text-white">
                                <Link className="nav-link active text-white" to="/home" aria-current="page" href="#">
                                    Inicio
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/listaproductos" aria-current="page" href="#">
                                    Lista de Productos
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/modificar" aria-current="page" href="#">
                                    Modificar Productos
                                </Link>
                            </li>
                               
                            <li className="nav-item">
                                <Link className="nav-link active text-white" to="/ventas" aria-current="page" href="#">
                                    Lista de Ventas
                                </Link>
                            </li>
                           
                        </ul>
                        <form className="d-flex" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-outline-success" type="submit">
                                Search
                            </button>
                        </form>
                    </div>
                </div>
            </nav>


        </div>
    )



}