import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';

const P2010 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc10="#656565"
                fc10="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/act_tributaria_11_2010.pdf"
                    descripcionAño="01/10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/act_tributaria_10_2010.pdf"
                    descripcionAño="01/10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/act_tributaria_9_2010.pdf"
                    descripcionAño="01/10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/act_tributaria_8_2010.pdf"
                    descripcionAño="01/10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/act_tributaria_7_2010.pdf"
                    descripcionAño="01/10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/act_tributaria_6_2010.pdf"
                    descripcionAño="06/10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/act_tributaria_5_2010.pdf"
                    descripcionAño="05/10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/act_tributaria_3_2010.pdf"
                    descripcionAño="03/10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2011/act_tributaria_2_2010.pdf"
                    descripcionAño="02/10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2010/act_tributaria_1_2010.pdf"
                    descripcionAño="01/10"
                />
                <Badge
                    data={props.data}
                    año="2010"
                    linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2010/ActTributaria2010-Es.pdf"
                    descripcionAño="2010"
                />
            </div>
        </div>
    )
}

export default P2010;