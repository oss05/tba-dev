import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const Seguros = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc13="#656565"
                fc13="#fff" />
        <Dropdown data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.seguros.nombre} />
            <Contenido data={props.data}
                parrafo={props.data.areas.practica.area.seguros.uno}
                parrafoDos={props.data.areas.practica.area.seguros.dos}
                parrafoTres={props.data.areas.practica.area.seguros.tres}
                parrafoCuatro={props.data.areas.practica.area.seguros.cuatro}
            />
        </section>
    </div>
    )
}

export default Seguros;