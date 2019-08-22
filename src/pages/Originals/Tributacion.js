import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';
import Responsable from '../../components/Responsable';


const Tributacion = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc10="#656565"
                fc10="#fff" />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.tributacion.nombre} />
            <Contenido data={props.data}
                parrafo={props.data.areas.practica.area.tributacion.uno}
                parrafoDos={props.data.areas.practica.area.tributacion.dos}
                parrafoTres={props.data.areas.practica.area.tributacion.tres}
                parrafoCuatro={props.data.areas.practica.area.tributacion.cuatro}
            />
            <Responsable 
            data={props.data}
            responsable="Mauricio Ambrosi Herrera"    
        />
        </section>
    </div>
    )
}

export default Tributacion;