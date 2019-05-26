import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const RepresenFiscal = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc9="#656565"
                fc9="#fff" />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.represenfis.nombre} />
            <Contenido data={props.data}
                parrafo={props.data.areas.practica.area.represenfis.uno}
                parrafoDos={props.data.areas.practica.area.represenfis.dos}
                parrafoTres={props.data.areas.practica.area.represenfis.tres}
                parrafoCuatro={props.data.areas.practica.area.represenfis.cuatro}
                parrafoCinco={props.data.areas.practica.area.represenfis.cinco}
            />
        </section>
    </div>
    )
}

export default RepresenFiscal;