import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const InstitucionesF = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc5="#656565"
                fc5="#fff" />
        <Dropdown data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.institucionesF.nombre} />
            <Contenido data={props.data}
                parrafo={props.data.areas.practica.area.institucionesF.uno}
                parrafoDos={props.data.areas.practica.area.institucionesF.dos}
                parrafoTres={props.data.areas.practica.area.institucionesF.tres}
                parrafoCuatro={props.data.areas.practica.area.institucionesF.cuatro}
                parrafoCinco={props.data.areas.practica.area.institucionesF.cinco}
            />
        </section>
    </div>
    )
}

export default InstitucionesF;