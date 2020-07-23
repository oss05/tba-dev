import React from 'react';
import Izq from '../../components/SeccionIzqPublicacionesEng';
import Dropdown from '../../components/DropdownPublicacionesEng';
import Badge from '../../components/BadgePublicaciones';
import Dos from '../../assets/DocsTBA-EN/2020/Mexican-Fiscal-Update-MEXICAN-TAX-AMENDMENTS-FOR-2020.pdf'

const P2020 = props => {
    return (
        <div className="page">
            <Izq data={props.data} 
            bgc2 = "#656565"
            fc2 = "#fff"/>
            <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
            <Badge
                // tamanio= "90%"
                data={props.data}
                año="2020"
                linkPdf={Dos}
                descripcionAño=" - Mexican Tax Amendments for 2020"
                envio={props.data.areas.publicaciones.envio.diciembre}
                fecha=" 23-19"
            />
            </div>
        </div>
    )
}

export default P2020;