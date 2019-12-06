import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';
import Responsable from '../../components/Responsable';
import '../../styles/areasPractica.css'

const Fundaciones = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc16="#656565"
                f16="#fff" />
            <Dropdown data={props.data} />
            <section className="areaTextContainer">
                <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.fundaciones.nombre} />
                <Contenido data={props.data}
                    parrafo={props.data.areas.practica.area.fundaciones.uno}
                    parrafoDos={props.data.areas.practica.area.fundaciones.dos}
                    parrafoTres={props.data.areas.practica.area.fundaciones.tres}
                    parrafoCuatro={props.data.areas.practica.area.fundaciones.cuatro}
                    parrafoCinco={props.data.areas.practica.area.fundaciones.cinco}
                />
                <Responsable
                    data={props.data}
                    responsable="Mauricio Ambrosi Herrera"
                />
            </section>
        </div>
    );

}

export default Fundaciones;