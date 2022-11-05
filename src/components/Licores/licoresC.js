import React from "react";
import PropTypes from 'prop-types';
import './licores.css';

export default function LicoresCardA({ image, name, additional, prise, stock, showAdditional }) {
   
    return <div className="licores-wrapper">

        <img src={image} />
        <h3>{name}</h3>
        <h3>{prise}</h3>
        <h3>{stock}</h3>
       
    </div>
}
//que tipo de dato tiene esta funcion
LicoresCardA.prototype = {
    additional: PropTypes.shape({
        notes: PropTypes.string,
        link: PropTypes.string
    }),
    image:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    prise: PropTypes.number.isRequired,
    stock: PropTypes.string.isRequired,
    showAdditional: PropTypes.func.isRequired,
}

LicoresCardA.defaultProps = {
    additional: {
        notes: 'No aditionla information'

    }
    
}