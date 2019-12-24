import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const AsesoriaFiscal = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc2="#656565"
                fc2="#fff" />
        <Dropdown data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.asesoriafis.nombre} />
            <div className="contenido">
                <p>{props.data.areas.practica.area.asesoriafis.uno}</p>
                <p>{props.data.areas.practica.area.asesoriafis.dos}</p>
                <p style={{display: "inline"}}>{props.data.areas.practica.area.asesoriafis.tres}</p>
                <p style={{display: "inline" , fontWeight: "bold"}}>{props.data.areas.practica.area.asesoriafis.bold}</p>
                <p style={{display: "inline"}}>{props.data.areas.practica.area.asesoriafis.trespuntouno}</p>
                <p style={{display: "inline" }}>{props.data.areas.practica.area.asesoriafis.bold2}</p>
                <p style={{display: "inline"}}>{props.data.areas.practica.area.asesoriafis.trespuntodos}</p> <br/><br/>
                <p style={{display: "inline"}}>{props.data.areas.practica.area.asesoriafis.cuatro}</p>
                <p style={{display: "inline", fontWeight: "bold"}}>{props.data.areas.practica.area.asesoriafis.bold3}</p>
                <p style={{display: "inline"}}>{props.data.areas.practica.area.asesoriafis.cuatropuntouno}</p>
                <p style={{marginTop: 16}}>{props.data.areas.practica.area.asesoriafis.cinco}</p>
                <p style={{display: "inline"}}>{props.data.areas.practica.area.asesoriafis.seis}</p>
                <p style={{display: "inline", fontWeight: "bold"}}>{props.data.areas.practica.area.asesoriafis.bold4}</p>
                <p style={{display: "inline"}}>{props.data.areas.practica.area.asesoriafis.seispuntouno}</p>
            </div>
        </section>
    </div>
    )
}

export default AsesoriaFiscal;