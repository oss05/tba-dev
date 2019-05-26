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
                bgc={props.bgc2}
                fc={props.fc2}
                endPoint="./asesoriafis"
                menuArea={props.data.areas.practica.area.asesoriafis.nombre}
            />
            <Menu
            bgc={props.bgc3}
                fc={props.fc3}
                endPoint="./industriasnav"
                menuArea={props.data.areas.practica.area.industriasnav.nombre}
            />
            <Menu
            bgc={props.bgc4}
                fc={props.fc4}
                endPoint="./institucionesasist"
                menuArea={props.data.areas.practica.area.institucionesasist.nombre}
            />
            <Menu
            bgc={props.bgc5}
                fc={props.fc5}
                endPoint="./institucionesF"
                menuArea={props.data.areas.practica.area.institucionesF.nombre}
            />
            <Menu
            bgc={props.bgc6}
                fc={props.fc6}
                endPoint="./litigiofiscal"
                menuArea={props.data.areas.practica.area.litigiofiscal.nombre}
            />
            <Menu
            bgc={props.bgc7}
                fc={props.fc7}
                endPoint="./planeacionp"
                menuArea={props.data.areas.practica.area.planeacionp.nombre}
            />
            <Menu
            bgc={props.bgc8}
                fc={props.fc8}
                endPoint="./proyectosinfra"
                menuArea={props.data.areas.practica.area.proyectosinfra.nombre}
            />
            <Menu
            bgc={props.bgc9}
                fc={props.fc9}
                endPoint="./represenfis"
                menuArea={props.data.areas.practica.area.represenfis.nombre}
            />
            <Menu
            bgc={props.bgc10}
                fc={props.fc10}
                endPoint="./tributacion"
                menuArea={props.data.areas.practica.area.tributacion.nombre}
            />
            <Menu
            bgc={props.bgc11}
                fc={props.fc11}
                endPoint="./valoresp"
                menuArea={props.data.areas.practica.area.valoresp.nombre}
            />
            <Menu
            bgc={props.bgc12}
                fc={props.fc12}
                endPoint="./ventasdirec"
                menuArea={props.data.areas.practica.area.ventasdirec.nombre}
            />
            <Menu
            bgc={props.bgc13}
                fc={props.fc13}
                endPoint="./seguros"
                menuArea={props.data.areas.practica.area.seguros.nombre}
            />
        </ul>
    )
}

export default Izq;