import React from 'react';
import Menu from './Menu';

const Izq = props => {
    return(
        <ul>
            <Menu
                endPoint="./aduanas"
                menuArea={props.data.areas.practica.nombreCompleto}
            />
            <Menu
             endPoint="./asesoriafis"
             menuArea="lel"/>
            <Menu
             endPoint="./industrianav"
             menuArea="XD"/>
        </ul>
    )
}

export default Izq;