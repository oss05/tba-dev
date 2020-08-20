import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import tres from '../../assets/DocsTBA/2018/at-03-18.pdf';
import Dos from '../../assets/DocsTBA/2018/at-02-18.pdf';
import Uno from '../../assets/DocsTBA/2018/at-01-18.pdf';

const P2018 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc2="#656565"
                fc2="#fff" />
            <Dropdown data={props.data} />
            <div style={{ width: "100%" }}>
                <Badge
                    // tamanio="500px"
                    data={props.data}
                    año="2018"
                    linkPdf={tres}
                    descripcionAño="2018"
                    envio={props.data.areas.publicaciones.envio.agosto}
                    fecha=""
                />
                <Badge
                // tamanio="450px"
                    data={props.data}
                    año="2018"
                    linkPdf={Dos}
                    descripcionAño="2018"
                    envio={props.data.areas.publicaciones.envio.julio}
                    fecha=""
                />
                <Badge
                // tamanio="420px"
                    data={props.data}
                    año="2018"
                    linkPdf={Uno}
                    descripcionAño="2018"
                    envio={props.data.areas.publicaciones.envio.junio}
                    fecha=""
                />
            </div>
        </div>
    )
}

export default P2018;