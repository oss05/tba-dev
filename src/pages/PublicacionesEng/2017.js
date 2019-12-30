import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import Cuatro from '../../assets/DocsTBA/2017/at-04-17.pdf';
import Tres from '../../assets/DocsTBA/2017/at-03-17.pdf';
import Dos from '../../assets/DocsTBA/2017/at-02-17.pdf';
import Uno from '../../assets/DocsTBA/2017/at-01-17.pdf';

const P2017 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc3="#656565"
                fc3="#fff" />
            <Dropdown data={props.data} />
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2017"
                    linkPdf={Cuatro}
                    descripcionAño="04/17"
                    envio={props.data.areas.publicaciones.envio.febrero}
                    fecha="15-17"
                />
                <Badge
                    data={props.data}
                    año="2017"
                    linkPdf={Tres}
                    descripcionAño="03/17"
                    envio={props.data.areas.publicaciones.envio.febrero}
                    fecha="02-17"
                />
                <Badge
                    data={props.data}
                    año="2017"
                    linkPdf={Dos}
                    descripcionAño="02/17"
                    envio={props.data.areas.publicaciones.envio.enero}
                    fecha="19-17"
                />
                <Badge
                    data={props.data}
                    año="2017"
                    linkPdf={Uno}
                    descripcionAño="01/17"
                    envio={props.data.areas.publicaciones.envio.enero}
                    fecha=""
                />
            </div>
        </div>
    )
}

export default P2017;