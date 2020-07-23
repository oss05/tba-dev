import React from 'react';
import Izq from '../../components/SeccionIzqPublicacionesEng';
import Dropdown from '../../components/DropdownPublicacionesEng';
import Badge from '../../components/BadgePublicaciones';
import Dos from '../../assets/DocsTBA-EN/2013/Mexican Fiscal Update 3 2013.pdf';
import Uno from '../../assets/DocsTBA-EN/2013/AT 2013 - Inglés.pdf';

const P2013 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc5="#656565"
                fc5="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2013"
                    linkPdf={Dos}
                    descripcionAño=" - Mexican Tax Reform Bill for 2014"
                    envio={props.data.areas.publicaciones.envio.septiembre}
                    fecha=" 17-13"
                />
                <Badge
                    data={props.data}
                    año="2013"
                    linkPdf={Uno}
                    descripcionAño="2013"
                    envio={props.data.areas.publicaciones.envio.enero}
                    fecha=""
                />
            </div>
        </div>
    )
}

export default P2013;