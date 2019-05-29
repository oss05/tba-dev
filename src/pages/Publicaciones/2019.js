import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';

const P2019 = props => {
    const hey = "hey"
    return (
        <div className="page">
            <Izq data={props.data} 
            bgc = "#656565"
            fc = "#fff"/>
            <Dropdown data={props.data}/>
            <Badge
                data={props.data}
                año="2019"
                linkPdf="http://turanzas.com.mx/NvoDesign/pdfs/2019/at2019.pdf"
                descripcionAño="01/19"
            />
        </div>
    )
}

export default P2019;