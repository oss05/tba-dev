import React from 'react';
import Izq from '../../components/SeccionIzqPublicacionesEng';
import Dropdown from '../../components/DropdownPublicacionesEng';
import Badge from '../../components/BadgePublicaciones';
import Dos from '../../assets/DocsTBA-EN/2005/mex_fiscal_update_2_2005.pdf';
import Uno from '../../assets/DocsTBA-EN/2005/mex_fiscal_update_1_2005.pdf';

const P2010 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc11="#656565"
                fc11="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
            <Badge
                    data={props.data}
                    año="2005"
                    linkPdf={Dos}
                    descripcionAño=" - Fifth modification to the Miscellaneous Tax Resolution for 2005"
                    envio={props.data.areas.publicaciones.envio.octubre}
                    fecha=" 14-05"
                />
                <Badge
                    data={props.data}
                    año="2005"
                    linkPdf={Uno}
                    descripcionaño=" - Fourth Modification to the Miscellaneous Tax Resolution for 2005"
                    envio={props.data.areas.publicaciones.envio.agosto}
                    fecha=" 30-05"
                />
            </div>
        </div>
    )
}

export default P2010;