import React from 'react';
import Izq from '../../components/SeccionIzqPublicacionesEng';
import Dropdown from '../../components/DropdownPublicacionesEng';
import Badge from '../../components/BadgePublicaciones';
import Uno from '../../assets/DocsTBA-EN/2012/Mexican Fiscal Update 2012.pdf';

const P2012 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc6="#656565"
                fc6="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2012"
                    linkPdf={Uno}
                    descripcionAño="2012"
                    envio={props.data.areas.publicaciones.envio.diciembre}
                    fecha=" 10-12"
                />
            </div>
        </div>
    )
}

export default P2012;