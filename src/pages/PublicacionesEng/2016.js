import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import Once from '../../assets/DocsTBA/2016/atb-16-sept-11.pdf';
import Diez from '../../assets/DocsTBA/2016/atb-16-10.pdf';
import Nueve from '../../assets/DocsTBA/2016/atb-16-09.pdf';
import Ocho from '../../assets/DocsTBA/2016/atb-16-08.pdf';
import Siete from '../../assets/DocsTBA/2016/actualizacion-tributaria-7-2016.pdf';
import Seis from '../../assets/DocsTBA/2016/actualizacion-tributaria-6-2016.pdf';
import Cinco from '../../assets/DocsTBA/2016/actualizacion-tributaria-5-2016.pdf';
import Cuatro from '../../assets/DocsTBA/2016/actualizacion-tributaria-4-2016.pdf';
import Tres from '../../assets/DocsTBA/2016/actualizacion-tributaria-3-2016.pdf';
import Dos from '../../assets/DocsTBA/2016/actualizacion-tributaria-2-2016.pdf';
import Uno from '../../assets/DocsTBA/2016/actualizacion-tributaria-2-2016.pdf';

const P2016 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc4="#656565"
                fc4="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
                <Badge
                    style={{ width: "10% !important" }}
                    data={props.data}
                    año="2016"
                    linkPdf={Once}
                    descripcionAño="11/16"
                    envio={props.data.areas.publicaciones.envio.septiembre}
                    fecha="22"
                />
                <Badge
                    style={{ width: "100%" }}
                    data={props.data}
                    año="2016"
                    linkPdf={Diez}
                    descripcionAño="10/16"
                    envio={props.data.areas.publicaciones.envio.septiembre}
                    fecha="06"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf={Nueve}
                    descripcionAño="09/16"
                    envio={props.data.areas.publicaciones.envio.agosto}
                    fecha="09"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf={Ocho}
                    descripcionAño="08/16"
                    envio={props.data.areas.publicaciones.envio.julio}
                    fecha="07"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf={Siete}
                    descripcionAño="07/16"
                    envio={props.data.areas.publicaciones.envio.julio}
                    fecha="22"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf={Seis}
                    descripcionAño="06/16"
                    envio={props.data.areas.publicaciones.envio.mayo}
                    fecha="17"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf={Cinco}
                    descripcionAño="05/16"
                    envio={props.data.areas.publicaciones.envio.mayo}
                    fecha="12"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf={Cuatro}
                    descripcionAño="04/16"
                    envio={props.data.areas.publicaciones.envio.marzo}
                    fecha="14"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf={Tres}
                    descripcionAño="03/16"
                    envio={props.data.areas.publicaciones.envio.febrero}
                    fecha="17"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf={Dos}
                    descripcionAño="02/16"
                    envio={props.data.areas.publicaciones.envio.febrero}
                    fecha="02"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf={Uno}
                    descripcionAño="01/16"
                    envio={props.data.areas.publicaciones.envio.enero}
                    fecha="16"
                />
            </div>
        </div>
    )
}

export default P2016;