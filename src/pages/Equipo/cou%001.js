import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';
import fotoSocio from '../../assets/equipo/webHL.png';

const Abogado = props => {
    return (
        <div className="page" style={{ height: "auto" }}>
            <Izq data={props.data}
                bgc314="#656565"
                fc314="#fff" />
            <Dropdown data={props.data} />
            <section className="areaTextContainer">
                <div className="d-flex justify-content-around">
                    <HeaderEquipo
                        img={fotoSocio}
                        data={props.data}
                        rol={props.data.areas.equipo.counsel}
                        nombreEquipo="Hugo Iván López Miranda"
                        correoEquipo="hilopez@turanzas.com.mx"
                        linkCorreo="mailto:hilopez@turanzas.com.mx"
                    />
                </div>
                <ContenidoEquipo
                    data={props.data}
                    badgeName={props.data.areas.equipo.areas.nombre}
                    parrafoUno={props.data.areas.equipo.areas.quince}
                    parrafoDos={props.data.areas.equipo.areas.dos}
                    href="/areas/comercioInter"
                    href2="/areas/asesoriafis"

                    badgeName2={props.data.areas.equipo.educacion.nombre}
                    parrafoUno2={props.data.areas.equipo.educacion.HLUno}
                    parrafoDos2={props.data.areas.equipo.educacion.HLDos}
                    parrafoTres2={props.data.areas.equipo.educacion.HLTres}

                    badgeName3={props.data.areas.equipo.asociaciones.nombre}
                    parrafoUno3={props.data.areas.equipo.asociaciones.HLUno}
                />

            </section>

        </div>
    )
}

export default Abogado;