import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import tres from '../../assets/DocsTBA/2019/ActualizacionTributaria3-1-2019.pdf';
import Dos from '../../assets/dos.pdf';
import Uno from '../../assets/DocsTBA/2019/at2019.pdf';

const P2019 = props => {
    return (
        <div className="page">
            <Izq data={props.data} 
            bgc = "#656565"
            fc = "#fff"/>
            <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
            <Badge
                // tamanio="100%"
                data={props.data}
                año="2019"
                linkPdf={tres}
                descripcionAño="2019"
                envio={props.data.areas.publicaciones.envio.septiembre}
                fecha=""
            />
            <Badge
                // tamanio="100%"
                data={props.data}
                año="2019"
                linkPdf={Dos}
                descripcionAño="2019"
                envio={props.data.areas.publicaciones.envio.mayo}
                fecha=""
            />
            <Badge
                // tamanio= "90%"
                data={props.data}
                año="2019"
                linkPdf={Uno}
                descripcionAño="2019"
                envio={props.data.areas.publicaciones.envio.enero}
                fecha=""
            /></div>
        </div>
    )
}

export default P2019;