import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';

const P2016 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc4="#656565"
                fc4="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2017/at-01-17.pdf"
                    descripcionAño="11/16"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2017/at-02-17.pdf"
                    descripcionAño="10/16"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2017/at-03-17.pdf"
                    descripcionAño="09/16"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2017/at-04-17.pdf"
                    descripcionAño="08/16"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2017/at-04-17.pdf"
                    descripcionAño="07/16"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2017/at-04-17.pdf"
                    descripcionAño="06/16"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2017/at-04-17.pdf"
                    descripcionAño="05/16"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2017/at-04-17.pdf"
                    descripcionAño="04/16"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2017/at-04-17.pdf"
                    descripcionAño="03/16"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2017/at-04-17.pdf"
                    descripcionAño="02/16"
                />
                <Badge
                    data={props.data}
                    año="2016"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2017/at-04-17.pdf"
                    descripcionAño="01/16"
                />
            </div>
        </div>
    )
}

export default P2016;