import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';
import fotoSocio from '../../assets/equipo/webCR.png';

const Abogado = props => {
    return (
        <div className="page" style={{height:"auto"}}>
            <Izq data={props.data}
            bgc22 = "#656565"
            fc22 = "#fff" />
            <Dropdown data={props.data}/>
            <section className="areaTextContainer">
                <HeaderEquipo
                    img={fotoSocio}
                    data={props.data}
                    rol={props.data.areas.equipo.asociados}
                    nombreEquipo="Carlos Arturo Rubio Rojas"
                    correoEquipo="crubio@turanzas.com.mx"
                    linkCorreo="mailto:crubio@turanzas.com.mx"
                />
                  <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.dos}
                    parrafoDos={props.data.areas.equipo.areas.quince}
                    parrafoTres={props.data.areas.equipo.areas.dieciseis}
                    href="/areas/asesoriafis"
                    href2="/areas/comercioInter"
                    href3="/areas/contribuciones"

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.CAuno}
                />

            </section>

        </div>
    )
}

export default Abogado;