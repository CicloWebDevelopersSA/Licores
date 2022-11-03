import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";


function Footer() {
    render()
    return (
        <div>
   <footer className="bg-dark text-center text-white fixed-bottom">
  {/* Grid container */}
  
  <div
    className="text-center p-3"
    style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
  >
    © 2022 Copyright  <br></br>
    <a className="text-white" href="https://mdbootstrap.com/">
  WebDevelopers
    </a>
  </div>
  {/* Copyright */}
</footer>


        </div>
    )



}
export default Footer;