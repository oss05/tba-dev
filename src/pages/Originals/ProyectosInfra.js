import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const ProyectosInfra = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc8="#656565"
                fc8="#fff" />
        <Dropdown data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.proyectosinfra.nombre} />
            <Contenido data={props.data}
                parrafo={props.data.areas.practica.area.proyectosinfra.uno}
                parrafoDos={props.data.areas.practica.area.proyectosinfra.dos}
                parrafoTres={props.data.areas.practica.area.proyectosinfra.tres}
                parrafoCuatro={props.data.areas.practica.area.proyectosinfra.cuatro}
                parrafoCinco={props.data.areas.practica.area.proyectosinfra.cinco}
                parrafoSeis={props.data.areas.practica.area.proyectosinfra.seis}
            />
        </section>
    </div>
    )
}

export default ProyectosInfra;