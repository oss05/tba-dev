import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import Diesiciete from '../../assets/DocsTBA/2009/act_tributaria_16_2009.pdf';
import Diesciseis from '../../assets/DocsTBA/2009/act_tributaria_15_2009.pdf';
import Quince from '../../assets/DocsTBA/2009/act_tributaria_14_2009.pdf';
import Catorce from '../../assets/DocsTBA/2009/act_tributaria_13_2009.pdf';
import Trece from '../../assets/DocsTBA/2009/act_tributaria_12_2009.pdf';
import Doce from '../../assets/DocsTBA/2009/act_tributaria_11_2009.pdf';
import Once from '../../assets/DocsTBA/2009/act_tributaria_10_2009.pdf';
import Diez from '../../assets/DocsTBA/2009/act_tributaria_8_2009.pdf';
import Nueve from '../../assets/DocsTBA/2009/act_tributaria_7_2009.pdf';
import Ocho from '../../assets/DocsTBA/2009/act_tributaria_6_2009.pdf';
import Siete from '../../assets/DocsTBA/2009/act_tributaria_5_2009.pdf';
import Seis from '../../assets/DocsTBA/2009/act_tributaria_4_2009.pdf';
import Cinco from '../../assets/DocsTBA/2009/act_tributaria_3_2009.pdf';
import Cuatro from '../../assets/DocsTBA/2009/act_tributaria_ 2_2009.pdf';
import Tres from '../../assets/DocsTBA/2009/act_tributaria_1_2009.pdf';
import Dos from '../../assets/DocsTBA/2009/nominas_edo_mexico_2009.pdf';
import Uno from '../../assets/DocsTBA/2009/act_tributaria_anual_2009.pdf';

const P2009 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc11="#656565"
                fc11="#fff" />
            <Dropdown data={props.data} />
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Diesiciete}
                    descripcionAño="16/09"
                    envio={props.data.areas.publicaciones.envio.diciembre}
                    fecha="21-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Diesciseis}
                    descripcionAño="15/09"
                    envio={props.data.areas.publicaciones.envio.septiembre}
                    fecha="15-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Quince}
                    descripcionAño="14/09"
                    envio={props.data.areas.publicaciones.envio.agosto}
                    fecha="12-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Catorce}
                    descripcionAño="13/09"
                    envio={props.data.areas.publicaciones.envio.julio}
                    fecha="08-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Trece}
                    descripcionAño="12/09"
                    envio={props.data.areas.publicaciones.envio.junio}
                    fecha="15-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Doce}
                    descripcionAño="11/09"
                    envio={props.data.areas.publicaciones.envio.junio}
                    fecha="08-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Once}
                    descripcionAño="10/09"
                    envio={props.data.areas.publicaciones.envio.junio}
                    fecha="02-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Diez}
                    descripcionAño="08/09"
                    envio={props.data.areas.publicaciones.envio.mayo}
                    fecha="13-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Nueve}
                    descripcionAño="07/09"
                    envio={props.data.areas.publicaciones.envio.mayo}
                    fecha="08-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Ocho}
                    descripcionAño="06/09"
                    envio={props.data.areas.publicaciones.envio.abril}
                    fecha="28-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Siete}
                    descripcionAño="05/09"
                    envio={props.data.areas.publicaciones.envio.abril}
                    fecha="03-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Seis}
                    descripcionAño="04/09"
                    envio={props.data.areas.publicaciones.envio.marzo}
                    fecha="27-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Cinco}
                    descripcionAño="03/09"
                    envio={props.data.areas.publicaciones.envio.febrero}
                    fecha="20-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Cuatro}
                    descripcionAño="02/09"
                    envio={props.data.areas.publicaciones.envio.febrero}
                    fecha="05-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Tres}
                    descripcionAño="01/09"
                    envio={props.data.areas.publicaciones.envio.febrero}
                    fecha="02-10"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Dos}
                    descripcionAño="Nominas"
                    envio={props.data.areas.publicaciones.envio.enero}
                    fecha="21-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Uno}
                    descripcionaño="2009"
                    envio={props.data.areas.publicaciones.envio.diciembre}
                    fecha="31-08"
                />
            </div>
        </div>
    )
}

export default P2009;