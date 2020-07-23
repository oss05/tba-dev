import React from 'react';
import Izq from '../../components/SeccionIzqPublicacionesEng';
import Dropdown from '../../components/DropdownPublicacionesEng';
import Badge from '../../components/BadgePublicaciones';
import Uno from '../../assets/DocsTBA-EN/2015/overview-energy-reform-matter-hydrocarbons.pdf';

const P2015 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc4="#656565"
                fc4="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
            <Badge
                // tamanio= "90%"
                data={props.data}
                año="2015"
                linkPdf={Uno}
                descripcionAño=" - Energy Reform 2015"
                envio={props.data.areas.publicaciones.envio.enero}
                fecha=" 20-05"
            />
            </div>
        </div>
    )
}

export default P2015;