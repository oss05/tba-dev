import React from 'react';
import Izq from '../../components/SeccionIzqPublicacionesEng';
import Dropdown from '../../components/DropdownPublicacionesEng';
import Badge from '../../components/BadgePublicaciones';
import Uno from '../../assets/DocsTBA-EN/2019/MexicanFiscalUpdate2019.pdf';

const P2019 = props => {
    return (
        <div className="page">
            <Izq data={props.data} 
            bgc3 = "#656565"
            fc3 = "#fff"/>
            <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
            <Badge
                // tamanio= "90%"
                data={props.data}
                año="2019"
                linkPdf={Uno}
                descripcionAño=" - Tax Transparent Entities, Foreign Legal Figures and Refipres"
                envio={props.data.areas.publicaciones.envio.septiembre}
                fecha=" 20/19"
            />
            </div>
        </div>
    )
}

export default P2019;