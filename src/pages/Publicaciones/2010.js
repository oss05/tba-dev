import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import Once from '../../assets/DocsTBA/2010/act_tributaria_11_2010.pdf';
import Diez from '../../assets/DocsTBA/2010/act_tributaria_10_2010.pdf';
import Nueve from '../../assets/DocsTBA/2010/act_tributaria_9_2010.pdf';
import Ocho from '../../assets/DocsTBA/2010/act_tributaria_8_2010.pdf';
import Siete from '../../assets/DocsTBA/2010/act_tributaria_7_2010.pdf';
import Seis from '../../assets/DocsTBA/2010/act_tributaria_6_2010.pdf';
import Cinco from '../../assets/DocsTBA/2010/act_tributaria_5_2010.pdf';
import Cuatro from '../../assets/DocsTBA/2010/act_tributaria_3_2010.pdf';
import Tres from '../../assets/DocsTBA/2010/act_tributaria_2_2010.pdf';
import Dos from '../../assets/DocsTBA/2010/act_tributaria_1_2010.pdf';
import Uno from '../../assets/DocsTBA/2010/ActTributaria2010-Es.pdf';

const P2010 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc10="#656565"
                fc10="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf={Once}
                    descripcionAño="2010"
                    envio={props.data.areas.publicaciones.envio.octubre}
                    fecha="12-10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf={Diez}
                    descripcionAño="2010"
                    envio={props.data.areas.publicaciones.envio.septiembre}
                    fecha="29-10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf={Nueve}
                    descripcionAño="2010"
                    envio={props.data.areas.publicaciones.envio.septiembre}
                    fecha="21-10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf={Ocho}
                    descripcionAño="2010"
                    envio={props.data.areas.publicaciones.envio.julio}
                    fecha="20-10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf={Siete}
                    descripcionAño="2010"
                    envio={props.data.areas.publicaciones.envio.julio}
                    fecha="12-10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf={Seis}
                    descripcionAño="2010"
                    envio={props.data.areas.publicaciones.envio.julio}
                    fecha="1-10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf={Cinco}
                    descripcionAño="2010"
                    envio={props.data.areas.publicaciones.envio.mayo}
                    fecha="27-10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf={Cuatro}
                    descripcionAño="2010"
                    envio={props.data.areas.publicaciones.envio.febrero}
                    fecha="9-10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf={Tres}
                    descripcionAño="2010"
                    envio={props.data.areas.publicaciones.envio.febrero}
                    fecha="9-10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf={Dos}
                    descripcionAño="2010"
                    envio={props.data.areas.publicaciones.envio.febrero}
                    fecha="8-10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf={Uno}
                    descripcionAño="2010"
                    envio={props.data.areas.publicaciones.envio.diciembre}
                    fecha="31-09"
                />
            </div>
        </div>
    )
}

export default P2010;