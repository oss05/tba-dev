import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import Dos from '../../assets/DocsTBA/2020/Actualizacion-Tributaria2020.pdf'

const P2020 = props => {
    return (
        <div className="page">
            <Izq data={props.data} 
            bgc0 = "#656565"
            fc0 = "#fff"/>
            <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
            <Badge
                // tamanio= "90%"
                data={props.data}
                año="2020"
                linkPdf={Dos}
                descripcionAño="01/20"
                envio={props.data.areas.publicaciones.envio.enero}
                fecha=""
            />
            </div>
        </div>
    )
}

export default P2020;