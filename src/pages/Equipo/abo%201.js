import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';

const Abogado = props => {
    return (
        <div className="page" style={{height:"auto"}}>
            <Izq data={props.data}
            bgc21 = "#656565"
            fc21 = "#fff" />
            <Dropdown data={props.data}/>
            <section className="areaTextContainer">
                <HeaderEquipo
                    data={props.data}
                    rol={props.data.areas.equipo.abogados}
                    display="none"
                    nombreEquipo="Luis Alberto Rosas Ortiz"
                    correoEquipo="lrosas@turanzas.com.mx"
                    linkCorreo="mailto:lrosas@turanzas.com.mx"
                />
                  <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.dos}
                    parrafoDos={props.data.areas.equipo.areas.diez}
                    parrafoTres={props.data.areas.equipo.areas.veinte}

                    parrafoUno2={props.data.areas.equipo.educacion.LAuno}
                    parrafoDos2={props.data.areas.equipo.educacion.LAdos}
                    parrafoTres2={props.data.areas.equipo.educacion.LAtres}
                />

            </section>

        </div>
    )
}

export default Abogado;