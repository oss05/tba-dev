import React from "react";
import Izq from "../../components/SeccionIzqEquipo";
import Dropdown from "../../components/Dropdown";
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from "../../components/contenidoEquipo";

const Abogado = (props) => {
  return (
    <div className="page" style={{ height: "auto" }}>
      <Izq data={props.data} bgc34="#656565" fc34="#fff" />
      <Dropdown data={props.data} />
      <section className="areaTextContainer">
        <HeaderEquipo
          data={props.data}
          rol={props.data.areas.equipo.abogados}
          display="none"
          nombreEquipo="Luis Manuel Lorenzana Leyva"
          correoEquipo="llorenzana@turanzas.com.mx"
          linkCorreo="mailto:llorenzana@turanzas.com.mx"
        />
        <ContenidoEquipo
          data={props.data}
          badgeName={props.data.areas.equipo.areas.nombre}
          parrafoUno={props.data.areas.equipo.areas.dos}
          href="/areas/asesoriafis"
          badgeName2={props.data.areas.equipo.educacion.nombre}
          parrafoUno2={props.data.areas.equipo.educacion.LM}
          parrafoDos2={props.data.areas.equipo.educacion.LMdos}
        />
      </section>
    </div>
  );
};

export default Abogado;
