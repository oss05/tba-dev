import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';
import Responsable from '../../components/Responsable';

const LitigioFiscal = props => {
    return (
        <div className="page">
        <Izq data={props.data}
                bgc6="#656565"
                fc6="#fff" />
        <Dropdown data={props.data} />
        <section className="areaTextContainer">
            <HeaderAreas 
                data={props.data} 
                nombreArea={props.data.areas.practica.area.litigiofiscal.nombre} />
                <div className="contenido">
                    <p style={{display:"inline"}}>{props.data.areas.practica.area.litigiofiscal.uno}</p>
                    <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.area.litigiofiscal.bold}</p> <br/><br/>
                    <p>{props.data.areas.practica.area.litigiofiscal.dos}</p>
                    <p>{props.data.areas.practica.area.litigiofiscal.tres}</p>
                    <p>{props.data.areas.practica.area.litigiofiscal.cuatro}</p>
                </div>
        {/* <Responsable 
            data={props.data}
            responsable="Mauricio Ambrosi Herrera"    
        /> */}
        </section>
    </div>
    )
}

export default LitigioFiscal;