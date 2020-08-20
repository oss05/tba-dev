import React from "react";
import Izq from "../../components/SeccionIzqEquipo";
import Dropdown from "../../components/Dropdown";
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from "../../components/contenidoEquipo";

const Abogado = (props) => {
  return (
    <div className="page" style={{ height: "auto" }}>
      <Izq data={props.data} bgc35="#656565" fc35="#fff" />
      <Dropdown data={props.data} />
      <section className="areaTextContainer">
        <HeaderEquipo
          data={props.data}
          rol={props.data.areas.equipo.abogados}
          display="none"
          nombreEquipo="Javier Caire Barranco"
          correoEquipo="jcaire@turanzas.com.mx"
          linkCorreo="mailto:jcaire@turanzas.com.mx"
        />
        <ContenidoEquipo
          data={props.data}
          badgeName={props.data.areas.equipo.areas.nombre}
          parrafoUno={props.data.areas.equipo.areas.uno}
          parrafoDos={props.data.areas.equipo.areas.tres}
          parrafoTres={props.data.areas.equipo.areas.cinco}
          parrafoCuatro={props.data.areas.equipo.areas.trece}
          href="/areas/aduanas"
          href2="/areas/industriasnav"
          href3="/areas/institucionesF"
          href4="/areas/ventasdirec"
          badgeName2={props.data.areas.equipo.educacion.nombre}
          parrafoUno2={props.data.areas.equipo.educacion.JC}
          parrafoDos2={props.data.areas.equipo.educacion.JCdos}
          parrafoTres2={props.data.areas.equipo.educacion.JCtres}
        />
      </section>
    </div>
  );
};

export default Abogado;
