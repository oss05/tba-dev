import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';

const InstitucionesAsist = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc4="#656565"
                fc4="#fff" />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.institucionesasist.nombre} />
            <Contenido data={props.data}
                parrafo={props.data.areas.practica.area.institucionesasist.uno}
                parrafoDos={props.data.areas.practica.area.institucionesasist.dos}
                parrafoTres={props.data.areas.practica.area.institucionesasist.tres}
            />
        </section>
    </div>
    )
}

export default InstitucionesAsist;