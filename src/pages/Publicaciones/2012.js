import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';

const P2012 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc8="#656565"
                fc8="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2012"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2012/actTributaria2012_7.pdf"
                    descripcionAño="07/12"
                />
                <Badge
                    data={props.data}
                    año="2012"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2012/actTributaria2012_6.pdf"
                    descripcionAño="06/12"
                />
                <Badge
                    data={props.data}
                    año="2012"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2012/actTributaria2012_3.pdf"
                    descripcionAño="03/12"
                />
                <Badge
                    data={props.data}
                    año="2012"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2012/actTributaria2012_2.pdf"
                    descripcionAño="02/12"
                />
                <Badge
                    data={props.data}
                    año="2012"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2012/actTributaria2012_1.pdf"
                    descripcionAño="01/12"
                />
                <Badge
                    data={props.data}
                    año="2012"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2012/actTributaria2012.pdf"
                    descripcionAño="2012"
                />
            </div>
        </div>
    )
}

export default P2012;