import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Badge from '../../components/BadgePublicaciones';

const P2015 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc5="#656565"
                fc5="#fff" />
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2015"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2015/actualizacion-tributaria-7-2015.pdf"
                    descripcionAño="07/15"
                />
                <Badge
                    data={props.data}
                    año="2015"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2015/actualizacion-tributaria-4-2015.pdf"
                    descripcionAño="04/15"
                />
                <Badge
                    data={props.data}
                    año="2015"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2015/actualizacion-tributaria-3-2015.pdf"
                    descripcionAño="03/15"
                />
            </div>
        </div>
    )
}

export default P2015;