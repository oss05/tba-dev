import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import Dos from '../../assets/DocsTBA/2020/Actualizacion-Tributaria2020.pdf'
import Uno from '../../assets/DocsTBA/2020/Actualizacion-Tributaria-2020.pdf'
import Tres from '../../assets/DocsTBA/2020/Actualizacion-Tributaria-Julio2020.pdf'


const P2021 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc21="#656565"
                fc21="#fff" />
            <Dropdown data={props.data} />
            <div style={{ width: "100%" }}>
                <Badge
                    // tamanio= "90%"
                    data={props.data}
                    año="2021"
                    linkPdf="https://turanzas.com.mx/at20/Actualizacion-Tributaria-Septiembre-2020.pdf"
                    descripcionAño="2021"
                    envio={props.data.areas.publicaciones.envio.septiembre}
                    fecha=""
                />
            </div>
        </div>
    )
}

export default P2021;