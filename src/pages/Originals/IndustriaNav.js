import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';
import Responsable from '../../components/Responsable';


const IndustriaNav = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc3="#656565"
                fc3="#fff" />
        <Dropdown data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.industriasnav.nombre} />
            <div className="contenido">
                <p style={{display:"inline"}}>{props.data.areas.practica.area.industriasnav.uno}</p>
                <p style={{display:"inline", fontWeight: "bold"}}>{props.data.areas.practica.area.industriasnav.bold}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.industriasnav.unopuntouno}</p> <br/><br/>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.industriasnav.dos}</p>
                <p style={{display:"inline", fontWeight: "bold"}}>{props.data.areas.practica.area.industriasnav.bold2}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.industriasnav.dospuntouno}</p> <br/><br/>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.industriasnav.tres}</p>
                <p style={{display:"inline", fontWeight: "bold"}}>{props.data.areas.practica.area.industriasnav.bold3}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.area.industriasnav.trespuntouno}</p> <br/><br/>
                <p>{props.data.areas.practica.area.industriasnav.cuatro}</p>
            </div>
            {/* <Responsable 
            data={props.data}
            responsable="Mauricio Ambrosi Herrera"    
        /> */}
        </section>
    </div>
    )
}

export default IndustriaNav;