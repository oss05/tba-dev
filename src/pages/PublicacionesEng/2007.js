import React from 'react';
import Izq from '../../components/SeccionIzqPublicacionesEng';
import Dropdown from '../../components/DropdownPublicacionesEng';
import Badge from '../../components/BadgePublicaciones';
import Cinco from '../../assets/DocsTBA-EN/2007/mex_fiscal_tax_reform_2007.pdf';
import Cuatro from '../../assets/DocsTBA-EN/2007/mex_fiscal_update_1_2007.pdf';
import Tres from '../../assets/DocsTBA-EN/2007/mex_fiscal_update_2007.pdf';
import Dos from '../../assets/DocsTBA-EN/2007/mex_fiscal_update_3_2007.pdf';

const P2007 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc9="#656565"
                fc9="#fff" />
            <Dropdown data={props.data} />
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2007"
                    linkPdf={Dos}
                    descripcionAño=" - International Practical Tax Aspects of New Mexican Flat Tax"
                    envio={props.data.areas.publicaciones.envio.octubre}
                    fecha=" 31-07"
                />
                <Badge
                    data={props.data}
                    año="2007"
                    linkPdf={Tres}
                    descripcionAño=" - Taxation on insurance payments"
                    envio={props.data.areas.publicaciones.envio.septiembre}
                    fecha=" 26-07"
                />
                <Badge
                    data={props.data}
                    año="2007"
                    linkPdf={Cuatro}
                    descripcionAño=" - Tax Bill For 2008"
                    envio={props.data.areas.publicaciones.envio.julio}
                    fecha=" 04-07"
                />
                <Badge
                    data={props.data}
                    año="2007"
                    linkPdf={Cinco}
                    descripcionAño=" - Relevant topics of the 2007 Mexican Tax Reform"
                    envio={props.data.areas.publicaciones.envio.enero}
                    fecha=" 05-07"
                />
            </div>
        </div>
    )
}

export default P2007;