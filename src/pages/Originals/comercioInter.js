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
                <Contenido data={props.data}
                    parrafo={props.data.areas.practica.area.comercioInter.uno}
                    parrafoDos={props.data.areas.practica.area.comercioInter.dos}
                    parrafoTres={props.data.areas.practica.area.comercioInter.tres}
                    parrafoCuatro={props.data.areas.practica.area.comercioInter.cuatro}
                    parrafoCinco={props.data.areas.practica.area.comercioInter.cinco}
                />
                {/* <Responsable
                    data={props.data}
                    responsable="Mauricio Ambrosi Herrera"
                /> */}
            </section>
        </div>
    );

}

export default ComercioInter;