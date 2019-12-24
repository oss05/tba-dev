import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';
import Responsable from '../../components/Responsable';
import '../../styles/areasPractica.css'

const ComercioInter = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc14="#656565"
                fc14="#fff" />
            <Dropdown data={props.data} />
            <section className="areaTextContainer">
                <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.comercioInter.nombre} />
                <div className="contenido">
                    <p style={{display:"inline"}}>{props.data.areas.practica.area.comercioInter.uno}</p>
                    <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.comercioInter.bold}</p>
                    <p style={{display:"inline"}}>{props.data.areas.practica.area.comercioInter.unopuntouno}</p>
                    <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.comercioInter.bold2}</p>
                    <p style={{display:"inline"}}>{props.data.areas.practica.area.comercioInter.unopuntodos}</p><br/><br/>
                    <p style={{display:"inline"}}>{props.data.areas.practica.area.comercioInter.dos}</p>
                    <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.comercioInter.bold3}</p>
                    <p style={{display:"inline"}}>{props.data.areas.practica.area.comercioInter.dospuntouno}</p>
                    <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.comercioInter.bold4}</p>
                    <p style={{display:"inline"}}>{props.data.areas.practica.area.comercioInter.dospuntodos}</p>
                    <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.comercioInter.bold5}</p>
                </div>
                {/* <Responsable
                    data={props.data}
                    responsable="Mauricio Ambrosi Herrera"
                /> */}
            </section>
        </div>
    );

}

export default ComercioInter;