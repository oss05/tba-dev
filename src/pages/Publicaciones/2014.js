import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import Uno from '../../assets/DocsTBA/2013/1366245608112_ES_ARCHIVO_1.pdf';

const P2014 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc6="#656565"
                fc6="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2014"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2015/actualizacion-tributaria-7-2015.pdf"
                    descripcionAño="2014"
                    envio={props.data.areas.publicaciones.envio.enero}
                    fecha="13/14"
                />
            </div>
        </div>
    )
}

export default P2014;