import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import Tres from '../../assets/DocsTBA/2015/actualizacion-tributaria-7-2015.pdf';
import Dos from '../../assets/DocsTBA/2015/actualizacion-tributaria-4-2015.pdf';
import Uno from '../../assets/DocsTBA/2015/actualizacion-tributaria-3-2015.pdf';

const P2015 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc5="#656565"
                fc5="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2015"
                    linkPdf={Tres}
                    descripcionAño="2015"
                    envio={props.data.areas.publicaciones.envio.noviembre}
                    fecha="25-15"
                />
                <Badge
                    data={props.data}
                    año="2015"
                    linkPdf={Dos}
                    descripcionAño="2015"
                    envio={props.data.areas.publicaciones.envio.mayo}
                    fecha="22-15"
                />
                <Badge
                    data={props.data}
                    año="2015"
                    linkPdf={Uno}
                    descripcionAño="2015"
                    envio={props.data.areas.publicaciones.envio.mayo}
                    fecha="19-15"
                />
            </div>
        </div>
    )
}

export default P2015;