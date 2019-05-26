import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const PlaneacionP = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc7="#656565"
                fc7="#fff" />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.planeacionp.nombre} />
            <Contenido data={props.data}
                parrafo={props.data.areas.practica.area.planeacionp.uno}
                parrafoDos={props.data.areas.practica.area.planeacionp.dos}
                parrafoTres={props.data.areas.practica.area.planeacionp.tres}
                parrafoCuatro={props.data.areas.practica.area.planeacionp.cuatro}
            />
        </section>
    </div>
    )
}

export default PlaneacionP;