import React from 'react';

const Contenido = props => {
    return (
        <div className="contenido">
            <p>
            {props.parrafo} <br/><br/> 
            {props.parrafoDos}<br/><br/> 
            {props.parrafoTres}<br/><br/> 
            {props.parrafoCuatro} <br/><br/> 
            {props.parrafoCinco} <br/><br/>
            {props.parrafoSeis} <br/><br/>
            {props.parrafoSiete} <br/><br/>
            </p>
        </div>
    )
}

export default Contenido;