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
            <Contenido data={props.data}
                parrafo={props.data.areas.practica.area.industriasnav.uno}
                parrafoDos={props.data.areas.practica.area.industriasnav.dos}
                parrafoTres={props.data.areas.practica.area.industriasnav.tres}
                parrafoCuatro={props.data.areas.practica.area.industriasnav.cuatro}
            />
            {/* <Responsable 
            data={props.data}
            responsable="Mauricio Ambrosi Herrera"    
        /> */}
        </section>
    </div>
    )
}

export default IndustriaNav;