import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const VentasDirec = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc12="#656565"
                fc12="#fff" />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.ventasdirec.nombre} />
            <Contenido data={props.data}
                parrafo={props.data.areas.practica.area.ventasdirec.uno}
                parrafoDos={props.data.areas.practica.area.ventasdirec.dos}
                parrafoTres={props.data.areas.practica.area.ventasdirec.tres}
                parrafoCuatro={props.data.areas.practica.area.ventasdirec.cuatro}
                parrafoCinco={props.data.areas.practica.area.ventasdirec.cinco}
            />
        </section>
    </div>
    )
}

export default VentasDirec;