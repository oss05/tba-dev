import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';
import Responsable from '../../components/Responsable';
import '../../styles/areasPractica.css'

const Aduanas = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc="#656565"
                fc="#fff" />
            <Dropdown data={props.data} />
            <section className="areaTextContainer">
                <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.aduanas.nombre} />
                <div className="contenido">
                    <p style={{display: "inline"}}>{props.data.areas.practica.area.aduanas.uno}</p>
                    <p style={{display: "inline", fontWeight: "bold"}}>{props.data.areas.practica.area.aduanas.bold}</p>
                    <p style={{display: "inline"}}>{props.data.areas.practica.area.aduanas.unopuntouno}</p>
                    <p style={{marginTop: 16}}>{props.data.areas.practica.area.aduanas.dos}</p>
                    <p>{props.data.areas.practica.area.aduanas.tres}</p>
                </div>
                {/* <Responsable
                    data={props.data}
                    responsable="Mauricio Ambrosi Herrera"
                /> */}
            </section>
        </div>
    );

}

export default Aduanas;