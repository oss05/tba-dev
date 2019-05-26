import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';

const LitigioFiscal = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc6="#656565"
                fc6="#fff" />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.litigiofiscal.nombre} />
            <Contenido data={props.data}
                parrafo={props.data.areas.practica.area.litigiofiscal.uno}
                parrafoDos={props.data.areas.practica.area.litigiofiscal.dos}
                parrafoTres={props.data.areas.practica.area.litigiofiscal.tres}
                parrafoCuatro={props.data.areas.practica.area.litigiofiscal.cuatro}
                parrafoCinco={props.data.areas.practica.area.litigiofiscal.cinco}
            />
        </section>
    </div>
    )
}

export default LitigioFiscal;