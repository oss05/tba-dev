import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import Seis from '../../assets/DocsTBA/2012/actTributaria2012_7.pdf';
import Cinco from '../../assets/DocsTBA/2012/actTributaria2012_6.pdf';
import Cuatro from '../../assets/DocsTBA/2012/actTributaria2012_3.pdf';
import Tres from '../../assets/DocsTBA/2012/actTributaria2012_2.pdf';
import Dos from '../../assets/DocsTBA/2012/actTributaria2012_1.pdf';
import Uno from '../../assets/DocsTBA/2012/actTributaria2012.pdf';

const P2012 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc8="#656565"
                fc8="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2012"
                    linkPdf={Seis}
                    descripcionAño="2012"
                    envio={props.data.areas.publicaciones.envio.diciembre}
                    fecha="21-12"

                />
                <Badge
                    data={props.data}
                    año="2012"
                    linkPdf={Cinco}
                    descripcionAño="2012"
                    envio={props.data.areas.publicaciones.envio.octubre}
                    fecha="17-12"
                />
                <Badge
                    data={props.data}
                    año="2012"
                    linkPdf={Cuatro}
                    descripcionAño="2012"
                    envio={props.data.areas.publicaciones.envio.mayo}
                    fecha="29-12"
                />
                <Badge
                    data={props.data}
                    año="2012"
                    linkPdf={Tres}
                    descripcionAño="2012"
                    envio={props.data.areas.publicaciones.envio.enero}
                    fecha="20-12"
                />
                <Badge
                    data={props.data}
                    año="2012"
                    linkPdf={Dos}
                    descripcionAño="2012"
                    envio={props.data.areas.publicaciones.envio.enero}
                    fecha="20-2012"
                />
                <Badge
                    data={props.data}
                    año="2012"
                    linkPdf={Uno}
                    descripcionAño="2012"
                    envio={props.data.areas.publicaciones.envio.diciembre}
                    fecha="31-12"
                />
            </div>
        </div>
    )
}

export default P2012;