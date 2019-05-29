import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';

const P2011 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc9="#656565"
                fc9="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/act_tributaria_6_2011.pdf"
                    descripcionAño="06/11"
                />
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/act_tributaria_5_2011.pdf"
                    descripcionAño="05/11"
                />
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/Contratos_Pemex.pdf"
                    descripcionAño=": Nuevos Contratos PEMEX"
                />
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/act_tributaria_4_2011.pdf"
                    descripcionAño="04/11"
                />
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/act_tributaria_3_2011.pdf"
                    descripcionAño="03/11"
                />
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/act_tributaria_2_2011.pdf"
                    descripcionAño="02/11"
                />
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/act_tributaria_1_2011.pdf"
                    descripcionAño="01/11"
                />
                <Badge
                    data={props.data}
                    año="2011"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/actributaria2011.pdf"
                    descripcionAño="2011"
                />
            </div>
        </div>
    )
}

export default P2011