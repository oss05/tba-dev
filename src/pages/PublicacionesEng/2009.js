import React from 'react';
import Izq from '../../components/SeccionIzqPublicacionesEng';
import Dropdown from '../../components/DropdownPublicacionesEng';
import Badge from '../../components/BadgePublicaciones';
import Cuatro from '../../assets/DocsTBA-EN/2009/mex_fiscal_update_4_2009.pdf';
import Tres from '../../assets/DocsTBA-EN/2009/mex_fiscal_update_3_2009.pdf';
import Dos from '../../assets/DocsTBA-EN/2009/mex_fiscal_update_2_2009.pdf';
import Uno from '../../assets/DocsTBA-EN/2009/mex_fiscal_update_1_2009.pdf';

const P2009 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc8="#656565"
                fc8="#fff" />
            <Dropdown data={props.data} />
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Tres}
                    descripcionAño=" - Modifications to the Application Rules for the Capital Repatriation Decree"
                    envio={props.data.areas.publicaciones.envio.julio}
                    fecha=" 13-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Dos}
                    descripcionAño=" - Application Rules of the Repatriation of Capitals Decree"
                    envio={props.data.areas.publicaciones.envio.abril}
                    fecha=" 29-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Uno}
                    descripcionAño=" - Repatriation Presidential Decree 2009"
                    envio={props.data.areas.publicaciones.envio.marzo}
                    fecha=" 30-09"
                />
                <Badge
                    data={props.data}
                    año="2009"
                    linkPdf={Cuatro}
                    descripcionaño=" - Tax Reforms for 2010"
                    envio={props.data.areas.publicaciones.envio.diciembre}
                    fecha=" 31-09"
                />
            </div>
        </div>
    )
}

export default P2009;