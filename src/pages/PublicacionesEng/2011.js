import React from 'react';
import Izq from '../../components/SeccionIzqPublicacionesEng';
import Dropdown from '../../components/DropdownPublicacionesEng';
import Badge from '../../components/BadgePublicaciones';
import Dos from '../../assets/DocsTBA-EN/2011/Pemex_Contracts.pdf';
import Uno from '../../assets/DocsTBA-EN/2011/mex_fiscal_update_1_2011.pdf';

const P2011 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc7="#656565"
                fc7="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf={Dos}
                    descripcionAño=" - New PEMEX Contracts"
                    envio={props.data.areas.publicaciones.envio.mayo}
                    fecha=" 23-11"
                />
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf={Uno}
                    descripcionAño=" - Tax Reforms for 2011"
                    envio={props.data.areas.publicaciones.envio.febrero}
                    fecha=" 11-11"
                />
            </div>
        </div>
    )
}

export default P2011