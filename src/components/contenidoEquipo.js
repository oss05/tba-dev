import React from 'react';
import Badge from './BadgeEquipo';

const Contenido = props => {
    return(
        <div className="equipoCategorias">
            <Badge
                badgeName={props.data.areas.equipo.areas.nombre}
                parrafoUno={props.data.areas.equipo.areas.uno}
                parrafoDos={props.data.areas.equipo.areas.dos}
                parrafoTres={props.data.areas.equipo.areas.tres}
                parrafoCuatro={props.data.areas.equipo.areas.cuatro}
            /> <br/>
            <Badge
            badgeName={props.data.areas.equipo.educacion.nombre}
            parrafoUno={props.data.areas.equipo.educacion.uno}
            parrafoDos={props.data.areas.equipo.educacion.dos}
            parrafoTres={props.data.areas.equipo.educacion.tres}
            /> <br/>
            <Badge
            badgeName={props.data.areas.equipo.asociaciones.nombre}
            parrafoUno={props.data.areas.equipo.asociaciones.uno}
            parrafoDos={props.data.areas.equipo.asociaciones.dos}
            parrafoTres={props.data.areas.equipo.asociaciones.tres}
            />
        </div>
    )
}

export default Contenido;