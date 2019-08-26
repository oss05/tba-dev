import React from 'react';
import Izq from '../../components/SeccionIzqEquipo';
import Dropdown from '../../components/Dropdown'
import HeaderEquipo from "../../components/HeaderEquipo";
import ContenidoEquipo from '../../components/contenidoEquipo';

const Abogado = props => {
    return (
        <div className="page" style={{height:"auto"}}>
            <Izq data={props.data}/>
            <Dropdown data={props.data}/>
            <section className="areaTextContainer">
                
                <HeaderEquipo
                    display="none"
                    data={props.data}
                    rol={props.data.areas.equipo.socios}
                    rolDisp="none"
                />
                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ipsum quis modi amet sequi! A eveniet, <br/>
                  at necessitatibus qui hic saepe. Iure maiores accusamus eveniet architecto quidem culpa tenetur rerum! <br/>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis earum cupiditate fuga voluptas quidem <br/> voluptates maxime qui quaerat amet, recusandae odit similique suscipit dignissimos libero, nihil <br/> tempora aliquam quod eaque.

                 </p>


            </section>

        </div>
    )
}

export default Abogado;