import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';
import Responsable from '../../components/Responsable';
import '../../styles/areasPractica.css'

const Contribuciones = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc15="#656565"
                fc15="#fff" />
            <Dropdown data={props.data} />
            <section className="areaTextContainer">
                <HeaderAreas data={props.data} nombreArea={props.data.areas.practica.area.contribuciones.nombre} />
                <Contenido data={props.data}
                    parrafo={props.data.areas.practica.area.contribuciones.uno}
                    parrafoDos={props.data.areas.practica.area.contribuciones.dos}
                    parrafoTres={props.data.areas.practica.area.contribuciones.tres}
                    parrafoCuatro={props.data.areas.practica.area.contribuciones.cuatro}
                    parrafoCinco={props.data.areas.practica.area.contribuciones.cinco}
                />
                {/* <Responsable
                    data={props.data}
                    responsable="Mauricio Ambrosi Herrera"
                /> */}
            </section>
        </div>
    );

}

export default Contribuciones;