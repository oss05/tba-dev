import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import Ocho from '../../assets/DocsTBA/2011/act_tributaria_6_2011.pdf';
import Siete from '../../assets/DocsTBA/2011/act_tributaria_5_2011.pdf';
import Seis from '../../assets/DocsTBA/2011/Contratos_Pemex.pdf';
import Cinco from '../../assets/DocsTBA/2011/act_tributaria_4_2011.pdf';
import Cuatro from '../../assets/DocsTBA/2011/act_tributaria_3_2011.pdf';
import Tres from '../../assets/DocsTBA/2011/act_tributaria_2_2011.pdf';
import Dos from '../../assets/DocsTBA/2011/act_tributaria_1_2011.pdf';
import Uno from '../../assets/DocsTBA/2011/actributaria2011.pdf';

const P2011 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc9="#656565"
                fc9="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf={Ocho}
                    descripcionAño="06/11"
                    envio={props.data.areas.publicaciones.envio.junio}
                    fecha="11-17"
                />
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf={Siete}
                    descripcionAño="05/11"
                    envio={props.data.areas.publicaciones.envio.junio}
                    fecha="3-11"
                />
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf={Seis}
                    descripcionAño=": Nuevos Contratos PEMEX"
                    envio={props.data.areas.publicaciones.envio.mayo}
                    fecha="23-11"
                />
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf={Cinco}
                    descripcionAño="04/11"
                    envio={props.data.areas.publicaciones.envio.marzo}
                    fecha="17-11"
                />
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf={Cuatro}
                    descripcionAño="03/11"
                    envio={props.data.areas.publicaciones.envio.febrero}
                    fecha="18-11"
                />
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf={Tres}
                    descripcionAño="02/11"
                    envio={props.data.areas.publicaciones.envio.febrero}
                    fecha="11-11"
                />
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf={Dos}
                    descripcionAño="01/11"
                    envio={props.data.areas.publicaciones.envio.febrero}
                    fecha="2-11"
                />
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf={Uno}
                    descripcionAño="2011"
                    envio={props.data.areas.publicaciones.envio.diciembre}
                    fecha="31-10"
                />
            </div>
        </div>
    )
}

export default P2011