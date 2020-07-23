import React from 'react';
import Izq from '../../components/SeccionIzqPublicacionesEng';
import Dropdown from '../../components/DropdownPublicacionesEng';
import Badge from '../../components/BadgePublicaciones';
import Uno from '../../assets/DocsTBA-EN/2010/Mexican-Fiscal-Update-2010.pdf';

const P2018 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc="#656565"
                fc="#fff" />
            <Dropdown data={props.data} />
            <div style={{ width: "100%" }}>
            <Badge
                    data={props.data}
                    año="2010"
                    linkPdf={Uno}
                    descripcionaño=" - Tax Reforms for 2010"
                    envio={props.data.areas.publicaciones.envio.enero}
                    fecha=" 11-10"
                />
            </div>
        </div>
    )
}

export default P2018;