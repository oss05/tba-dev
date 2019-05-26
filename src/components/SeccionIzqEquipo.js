import React from 'react';
import Menu from './Menu';
import MenuTitle from './MenuTitle';
import '../styles/areasPractica.css'

const Izq = props => {
    return(
        <ul className="menuIzq">
            <MenuTitle
                
                menuTitle={props.data.areas.equipo.socios}
            />
            <Menu
                bgc = {props.bgc}
                fc = {props.fc}
                endPoint="./sos001"
                menuArea="Mauricio Ambrosi Herrera"
            />
            <Menu
             endPoint="./sos002"
             menuArea="Mauricio Bravo Fortoul"
             />
            <Menu
             endPoint="./sos003"
             menuArea="Jorge Fuentes Pérez"
             />
             <Menu
             endPoint="./sos004"
             menuArea="Carl Edward Koller Lucio"
             />
             <Menu
             endPoint="./sos005"
             menuArea="Francisco Ortega Gaxiola"
             />
             <Menu
             endPoint="./sos006"
             menuArea="Pedro Ramírez Mota Velasco"
             />
             <Menu
             endPoint="./sos007"
             menuArea="Angel J. Turanzas Díaz"
             />
             <MenuTitle
                menuTitle={props.data.areas.equipo.asociados}
            />
             <Menu
             endPoint="./as101"
             menuArea="Pablo Fernández de Cevallos y Torres"
             />
              <Menu
             endPoint="./as102"
             menuArea="Cecilia Bustamante"
             />
              <Menu
             endPoint="./as103"
             menuArea="Norma Martínez Betanzos"
             />
             <MenuTitle
                menuTitle={props.data.areas.equipo.abogados}
            />
              <Menu
             endPoint="./abo201"
             menuArea="Luis Alberto Rosas Ortiz"
             />
              <Menu
             endPoint="./abo202"
             menuArea="Carlos Arturo Rubio Rojas"
             />
              <Menu
             endPoint="./abo203"
             menuArea="Regina Figueroa"
             />
              <Menu
             endPoint="./abo204"
             menuArea="Montserrat Tapia Campusano"
             />
              <Menu
             endPoint="./abo205"
             menuArea="Sixto Duarte Álvarez"
             />
             <MenuTitle
                menuTitle={props.data.areas.equipo.pasantes}
            />
              <Menu
             endPoint="./pas301"
             menuArea="Alejandro Diener Cabieses"
             /> <Menu
             endPoint="./pas302"
             menuArea="Juan Pablo Morales Cortés"
             />
              <Menu
             endPoint="./pas303"
             menuArea="María Fernanda López Zerecero"
             />
             <Menu
             endPoint="./pas304"
             menuArea="Luis Manuel Lorenzana Leyva"
             />
             <Menu
             endPoint="./pas305"
             menuArea="Javier Caire Barranco"
             />
             <Menu
             endPoint="./pas306"
             menuArea="Gonzalo Bugeda Salido"
             />
        </ul>
    )
}

export default Izq;