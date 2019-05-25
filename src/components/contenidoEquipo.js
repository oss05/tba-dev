import React from 'react';

const Contenido = props => {
    return(
        <div>
            <h2>
                {props.titleContentUno}
                {props.titleContentDos}
                {props.titleContentTres}
            </h2><br/>
            <p className="contenido">   
                {props.parrafoUno} <br/>
                {props.parrafoDos} <br/>
                {props.parrafoTres} <br/>
                {props.parrafoCuatro} <br/>
                {props.parrafoCinco} <br/>
                {props.parrafoSeis} <br/>
                {props.parrafoSiete} <br/>
                {props.parrafoOcho} <br/>
                {props.parrafoNueve} <br/>
                {props.parrafoDiez} <br/>
                {props.parrafoOnce} <br/>
                {props.parrafoDoce} <br/>
            </p>
        </div>
    )
}

export default Contenido;