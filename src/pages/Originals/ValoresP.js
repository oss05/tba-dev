import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const Valores = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc11="#656565"
                fc11="#fff" />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.valoresp.nombre} />
            <Contenido data={props.data}
                parrafo={props.data.areas.practica.area.valoresp.uno}
                parrafoDos={props.data.areas.practica.area.valoresp.dos}
                parrafoTres={props.data.areas.practica.area.valoresp.tres}
                parrafoCuatro={props.data.areas.practica.area.valoresp.cuatro}
                parrafoCinco={props.data.areas.practica.area.valoresp.cinco}
            />
        </section>
    </div>
    )
}

export default Valores;