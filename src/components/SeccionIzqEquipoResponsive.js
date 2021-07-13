import React from "react";
import Menu from "./Menu";
import MenuTitle from "./MenuTitle";
import "../styles/areasPractica.css";

const IzqResponsive = props => {
  return (
    <ul className="menuIzqResponsive">
      <MenuTitle menuTitle={props.data.areas.equipo.socios} />
      <Menu
        bgc={props.bgc}
        fc={props.fc}
        endPoint="./sos001"
        menuArea="Mauricio Ambrosi Herrera"
      />
      <Menu
        bgc={props.bgc2}
        fc={props.fc2}
        endPoint="./sos002"
        menuArea="Mauricio Bravo Fortoul"
      />
      <Menu
        bgc={props.bgc11}
        fc={props.fc11}
        endPoint="./as101"
        menuArea="Pablo Fernández de Cevallos y Torres"
      />
      <Menu
        bgc={props.bgc3}
        fc={props.fc3}
        endPoint="./sos003"
        menuArea="Jorge Fuentes Pérez"
      />
      <Menu
        bgc={props.bgc108}
        fc={props.fc108}
        endPoint="./sos008"
        menuArea="Rodrigo Garza del Río"
      />
      <Menu
        bgc={props.bgc4}
        fc={props.fc4}
        endPoint="./sos004"
        menuArea="Carl Edward Koller Lucio"
      />
      <Menu
        bgc={props.bgc5}
        fc={props.fc5}
        endPoint="./sos005"
        menuArea="Francisco Ortega Gaxiola"
      />
      <Menu
        bgc={props.bgc6}
        fc={props.fc6}
        endPoint="./sos006"
        menuArea="Pedro Ramírez Mota Velasco"
      />
      <Menu
        bgc={props.bgc7}
        fc={props.fc7}
        endPoint="./sos007"
        menuArea="Angel J. Turanzas Díaz"
      />

      <MenuTitle menuTitle={props.data.areas.equipo.counsel} />
      <Menu
        bgc={props.bgc314}
        fc={props.fc314}
        endPoint="./cou001"
        menuArea="Hugo Iván López Miranda"
      />
      {/* <Menu
        bgc={props.bgc13}
        fc={props.fc13}
        endPoint="./as103"
        menuArea="Norma Martínez Betanzos"
      /> */}
      <MenuTitle menuTitle={props.data.areas.equipo.asociados} />
      <Menu
        bgc={props.bgc12}
        fc={props.fc12}
        endPoint="./as102"
        menuArea="Cecilia Bustamante Bejarano"
      />
      <Menu
        bgc={props.bgc21}
        fc={props.fc21}
        endPoint="./abo201"
        menuArea="Luis Alberto Rosas Ortiz"
      />
      <Menu
        bgc={props.bgc22}
        fc={props.fc22}
        endPoint="./abo202"
        menuArea="Carlos Arturo Rubio Rojas"
      />
      <MenuTitle menuTitle={props.data.areas.equipo.abogados} />
      {/* <Menu
        bgc={props.bgc23}
        fc={props.fc23}
        endPoint="./abo203"
        menuArea="Regina Figueroa Aguayo"
      /> */}
      <Menu
        bgc={props.bgc24}
        fc={props.fc24}
        endPoint="./abo204"
        menuArea="Montserrat Tapia Campusano"
      />
      <Menu
        bgc={props.bgc25}
        fc={props.fc25}
        endPoint="./abo205"
        menuArea="Sixto Duarte Álvarez"
      />
      {/* <Menu
        bgc={props.bgc31}
        fc={props.fc31}
        endPoint="./pas301"
        menuArea="Alejandro Diener Cabieses"
      /> */}
      {/* <Menu
        bgc={props.bgc32}
        fc={props.fc32}
        endPoint="./pas302"
        menuArea="Juan Pablo Morales Cortés"
      /> */}
      <Menu
        bgc={props.bgc38}
        fc={props.fc38}
        endPoint="./pas308"
        menuArea="Julio Armando Montelongo Ceballos"
      />
      <Menu
        bgc={props.bgc35}
        fc={props.fc35}
        endPoint="./pas305"
        menuArea="Javier Caire Barranco"
      />
      <Menu
        bgc={props.bgc34}
        fc={props.fc34}
        endPoint="./pas304"
        menuArea="Luis Manuel Lorenzana Leyva"
      />
      <Menu
        bgc={props.bgc36}
        fc={props.fc36}
        endPoint="./pas306"
        menuArea="Luis Alejandro Ramírez González"
      />
      <Menu
        bgc={props.bgc37}
        fc={props.fc37}
        endPoint="./abo206"
        menuArea="Alejandra Solórzano Camacho"
      />
      <MenuTitle menuTitle={props.data.areas.equipo.pasantes} />
      <Menu
        bgc={props.bgc33}
        fc={props.fc33}
        endPoint="./pas303"
        menuArea="María Fernanda López Zerecero"
      />
      {/* <Menu
        bgc={props.bgc39}
        fc={props.fc39}
        endPoint="./pas309"
        menuArea="Pablo Múgica Ortiz"
      /> */}
      <Menu
        bgc={props.bgc313}
        fc={props.fc313}
        endPoint="./pas313"
        menuArea="Paola Bucay Bettech"
      />
      <Menu
        bgc={props.bgc3144}
        fc={props.fc3144}
        endPoint="./pas314"
        menuArea="Ma. José Menchaca Garza"
      />
      <Menu
        bgc={props.bgc310}
        fc={props.fc310}
        endPoint="./pas310"
        menuArea="David Guakil Raffoul"
      />
      <Menu
        bgc={props.bgc399}
        fc={props.fc399}
        endPoint="./pas315"
        menuArea="Ana Laura Hernández García"
      />
      <Menu
        bgc={props.bgc312}
        fc={props.fc312}
        endPoint="./pas312"
        menuArea="José Manuel Valderrama Ubando"
      />
      <Menu
        bgc={props.bgc311}
        fc={props.fc311}
        endPoint="./pas311"
        menuArea="Arturo Lomelín López"
      />
      <Menu
        bgc={props.bgc388}
        fc={props.fc388}
        endPoint="./pas316"
        menuArea="Emilio Cohen Shehoah"
      />
    </ul>
  );
};

export default IzqResponsive;
