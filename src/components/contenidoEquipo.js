import React from 'react';
import Badge from './BadgeEquipo';

const Contenido = props => {
    return (
        <div className="equipoCategorias">
            <Badge
                badgeName={props.badgeName}
                parrafoUno={props.parrafoUno}
                href={props.href}
                href2={props.href2}
                href3={props.href3}
                href4={props.href4}
                href5={props.href5}
                href6={props.href6}
                parrafoDos={props.parrafoDos}
                parrafoTres={props.parrafoTres}
                parrafoCuatro={props.parrafoCuatro}
                parrafoCinco={props.parrafoCinco}
                parrafoSeis={props.parrafoSeis}
            /> <br />
            <Badge
                badgeName={props.badgeName2}
                parrafoUno={props.parrafoUno2}
                parrafoDos={props.parrafoDos2}
                parrafoTres={props.parrafoTres2}
            /> <br />
            <Badge
                badgeName={props.badgeName3}
                parrafoUno={props.parrafoUno3}
                parrafoDos={props.parrafoDos3}
                parrafoTres={props.parrafoTres3}
            />
        </div>
    )
}

export default Contenido;