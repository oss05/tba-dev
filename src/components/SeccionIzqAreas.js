import React from 'react';
import Menu from './Menu';
import '../styles/areasPractica.css'

const Izq = props => {
    return (
        <ul className="menuIzq">
            <Menu
                bgc={props.bgc}
                fc={props.fc}
                endPoint="./aduanas"
                menuArea={props.data.areas.practica.area.aduanas.nombre}
            />
            <Menu
                endPoint="./asesoriafis"
                menuArea={props.data.areas.practica.area.asesoriafis.nombre}
            />
            <Menu
                endPoint="./industriasnav"
                menuArea={props.data.areas.practica.area.industriasnav.nombre}
            />
            <Menu
                endPoint="./institucionesasist"
                menuArea={props.data.areas.practica.area.institucionesasist.nombre}
            />
            <Menu
                endPoint="./institucionesF"
                menuArea={props.data.areas.practica.area.institucionesF.nombre}
            />
            <Menu
                endPoint="./litigiofiscal"
                menuArea={props.data.areas.practica.area.litigiofiscal.nombre}
            />
            <Menu
                endPoint="./planeacionp"
                menuArea={props.data.areas.practica.area.planeacionp.nombre}
            />
            <Menu
                endPoint="./proyectosinfra"
                menuArea={props.data.areas.practica.area.proyectosinfra.nombre}
            />
            <Menu
                endPoint="./represenfis"
                menuArea={props.data.areas.practica.area.represenfis.nombre}
            />
            <Menu
                endPoint="./tributacion"
                menuArea={props.data.areas.practica.area.tributacion.nombre}
            />
            <Menu
                endPoint="./valoresp"
                menuArea={props.data.areas.practica.area.valoresp.nombre}
            />
            <Menu
                endPoint="./ventasdirec"
                menuArea={props.data.areas.practica.area.ventasdirec.nombre}
            />
            <Menu
                endPoint="./seguros"
                menuArea={props.data.areas.practica.area.seguros.nombre}
            />
        </ul>
    )
}

export default Izq;