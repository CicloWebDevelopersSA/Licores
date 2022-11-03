import React, { Component } from 'react';
import './App.css';
import Header from '../Header';
import { licores } from '../../data/data.js';
import LicoresCard from '../Licores/licores.js';
import showAdditional from './Licores2'
import Footer from '../Footer';



/*
function showAdditional(additional){
  const alertInformation = Object.entries(additional)
  .map(information => `${information [0]}: ${information [1]}`)
  .join('\n'); 
 // alert(alertInformation);
 window.location.href = "./licores2"
}
*/


 function App() {
  return (
    <>
      <Header />
      
      <div className='wrapper'>
        <h1>Licores</h1>
        {licores.map(l => (
          <LicoresCard
            key={l.name}
            image={l.image}
            id={l.id}
            name={l.name}
            prise={l.prise}
            stock={l.stock}
            additional={l.additional}
            showAdditional={showAdditional}

        
          />
         
          
         
        ))}
      </div>
      <Footer/>
           
    </>
    
  );
}
export default App;



 