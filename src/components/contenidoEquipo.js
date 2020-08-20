import React from "react";
import Badge from "./BadgeEquipo";

const Contenido = (props) => {
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
        href7={props.href7}
        href8={props.href8}
        href9={props.href9}
        href10={props.href10}
        href11={props.href11}
        parrafoDos={props.parrafoDos}
        parrafoTres={props.parrafoTres}
        parrafoCuatro={props.parrafoCuatro}
        parrafoCinco={props.parrafoCinco}
        parrafoSeis={props.parrafoSeis}
        parrafoSiete={props.parrafoSiete}
        parrafoOcho={props.parrafoOcho}
        parrafoNueve={props.parrafoNueve}
        parrafoDiez={props.parrafoDiez}
        parrafoOnce={props.parrafoOnce}
      />{" "}
      <br />
      <Badge
        badgeName={props.badgeName4}
        parrafoUno={props.parrafoUno4}
        parrafoDos={props.parrafoDos4}
        parrafoTres={props.parrafoTres4}
        parrafoCuatro={props.parrafoCuatro4}
        parrafoCinco={props.parrafoCinco4}
        parrafoSeis={props.parrafoSeis4}
        parrafoSiete={props.parrafoSiete4}
        parrafoOcho={props.parrafoOcho4}
        parrafoNueve={props.parrafoNueve4}
        parrafoDiez={props.parrafoDiez4}
        parrafoOnce={props.parrafoOnce4}
        cursor="default"
      />
      <br />
      <Badge
        badgeName={props.badgeName2}
        parrafoUno={props.parrafoUno2}
        parrafoDos={props.parrafoDos2}
        parrafoTres={props.parrafoTres2}
        cursor="default"
      />{" "}
      <br />
      <Badge
        badgeName={props.badgeName3}
        parrafoUno={props.parrafoUno3}
        parrafoDos={props.parrafoDos3}
        parrafoTres={props.parrafoTres3}
        cursor="default"
      />
    </div>
  );
};

export default Contenido;
