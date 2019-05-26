import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const AsesoriaFiscal = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc2="#656565"
                fc2="#fff" />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.asesoriafis.nombre} />
            <Contenido data={props.data}
                parrafo={props.data.areas.practica.area.asesoriafis.uno}
                parrafoDos={props.data.areas.practica.area.asesoriafis.dos}
                parrafoTres={props.data.areas.practica.area.asesoriafis.tres}
                parrafoCuatro={props.data.areas.practica.area.asesoriafis.cuatro}
                parrafoCinco={props.data.areas.practica.area.asesoriafis.cinco}
            />
        </section>
    </div>
    )
}

export default AsesoriaFiscal;