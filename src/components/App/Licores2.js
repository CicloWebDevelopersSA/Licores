import React from "react";
import './App.css';



export default function showAdditional(additional){
    const alertInformation = Object.entries(additional)
    .map(information => `${information [0]}: ${information [1]}`)
    .join('\n'); 
    document.write(alertInformation);
  }
  
function Licores2() {
    return(
        <div className="Wrapper">
            <h1>Informacion Adicional</h1>
        </div>
    );

}
