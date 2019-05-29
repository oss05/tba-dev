import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Badge from '../../components/BadgePublicaciones';

const P2017 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc3="#656565"
                fc3="#fff" />
            <Dropdown data={props.data} />
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2017"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2017/at-04-17.pdf"
                    descripcionAño="04/17"
                />
                <Badge
                    data={props.data}
                    año="2017"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2017/at-03-17.pdf"
                    descripcionAño="03/17"
                />
                <Badge
                    data={props.data}
                    año="2017"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2017/at-02-17.pdf"
                    descripcionAño="02/17"
                />
                <Badge
                    data={props.data}
                    año="2017"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2017/at-01-17.pdf"
                    descripcionAño="01/17"
                />
            </div>
        </div>
    )
}

export default P2017;