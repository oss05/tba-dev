import React from 'react';
import Izq from '../../components/SeccionIzqAreas';
import Dropdown from '../../components/DropdownAreas'
import HeaderAreas from '../../components/HeaderAreas';
import Contenido from '../../components/contenido';


const Original = props => {
    return (
        <div className="page">
            <Izq data={props.data} />
            <Dropdown data={props.data} />
            <section className="areaTextContainer">
                <HeaderAreas
                    data={props.data}
                    borderBottom="solid 2px gray"
                    borderBottom2="none"
                    />
                <div className="homeRespo text-justify">
                   <p>{props.data.areas.practica.intro.p1}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.intro.p2}</p>
                <p style={{display:"inline", fontWeight:"bold"}}>{props.data.areas.practica.intro.bold}</p>
                <p style={{display:"inline"}}>{props.data.areas.practica.intro.p21}</p>
                </div>  
            </section>
        </div>
    )
}

export default Original;