import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import Dos from '../../assets/dos.pdf'

const P2019 = props => {
    const hey = "hey"
    return (
        <div className="page">
            <Izq data={props.data} 
            bgc = "#656565"
            fc = "#fff"/>
            <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
            <Badge
                data={props.data}
                año="2019"
                linkPdf={Dos}
                descripcionAño="02/19"
                envio={props.data.areas.publicaciones.envio.mayo}
                fecha=""
            />
            <Badge
                data={props.data}
                año="2019"
                linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2019/at2019.pdf"
                descripcionAño="01/19"
                envio={props.data.areas.publicaciones.envio.enero}
                fecha=""
            /></div>
        </div>
    )
}

export default P2019;