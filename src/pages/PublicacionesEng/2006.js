import React from 'react';
import Izq from '../../components/SeccionIzqPublicacionesEng';
import Dropdown from '../../components/DropdownPublicacionesEng';
import Badge from '../../components/BadgePublicaciones';
import Tres from '../../assets/DocsTBA-EN/2006/mex_fiscal_update_2_2006.pdf';
import Dos from '../../assets/DocsTBA-EN/2006/mex_fiscal_update_1_2006.pdf';
import Uno from '../../assets/DocsTBA-EN/2006/mex_tax_alert_2006.pdf';

const P2008 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc10="#656565"
                fc10="#fff" />
            <Dropdown data={props.data} />
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2006"
                    linkPdf={Uno}
                    descripcionAño=" - Taxation on insurance payment"
                    envio={props.data.areas.publicaciones.envio.diciembre}
                    fecha=" 23-06"
                />
                <Badge
                    data={props.data}
                    año="2006"
                    linkPdf={Tres}
                    descripcionAño=" - Inssuance of Administrative Rules Regarding Controlled Foreign Corporation's Regime"
                    envio={props.data.areas.publicaciones.envio.octubre}
                    fecha=" 24-06"
                />
                <Badge
                    data={props.data}
                    año="2006"
                    linkPdf={Dos}
                    descripcionaño=" - Relevant topics of the 2006 Mexican Tax Reform"
                    envio={props.data.areas.publicaciones.envio.enero}
                    fecha=" 10-05"
                />
            </div>
        </div>
    )
}

export default P2008;