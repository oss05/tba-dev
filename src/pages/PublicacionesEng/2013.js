import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import Cuatro from '../../assets/DocsTBA/2013/actualizacion_tributaria_3_2013.pdf';
import Tres from '../../assets/DocsTBA/2013/1366246924393_ES_ARCHIVO_1.pdf';
import Dos from '../../assets/DocsTBA/2013/1366245608112_ES_ARCHIVO_1.pdf';
import Uno from '../../assets/DocsTBA/2013/actualizacion_tributaria_2013.pdf';

const P2013 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc7="#656565"
                fc7="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2013"
                    linkPdf={Cuatro}
                    descripcionAño="03/13"
                    envio={props.data.areas.publicaciones.envio.septiembre}
                    fecha="20-13"
                />
                <Badge
                    data={props.data}
                    año="2013"
                    linkPdf={Tres}
                    descripcionAño="02/13"
                    envio={props.data.areas.publicaciones.envio.abril}
                    fecha="05-13"
                />
                <Badge
                    data={props.data}
                    año="2013"
                    linkPdf={Dos}
                    descripcionAño="01/13"
                    envio={props.data.areas.publicaciones.envio.febrero}
                    fecha="20-13"
                />
                <Badge
                    data={props.data}
                    año="2013"
                    linkPdf={Uno}
                    descripcionAño="2013"
                    envio={props.data.areas.publicaciones.envio.marzo}
                    fecha="21-13"
                />
            </div>
        </div>
    )
}

export default P2013;