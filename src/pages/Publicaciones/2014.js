import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Badge from '../../components/BadgePublicaciones';

const P2014 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc6="#656565"
                fc6="#fff" />
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2014"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2015/actualizacion-tributaria-7-2015.pdf"
                    descripcionAño="01/14"
                />
            </div>
        </div>
    )
}

export default P2014;