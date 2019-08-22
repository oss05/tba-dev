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
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur cumque quasi, modi illo quam aperiam eius <br/> repudiandae nulla similique placeat iure voluptas et itaque nesciunt unde quis ipsa adipisci facilis. <br/>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque perspiciatis dicta, odit consequatur <br/> provident nihil tempora voluptatem voluptates nostrum modi molestiae dolorum commodi laboriosam <br/> maxime voluptas, cumque iste inventore distinctio?
                </p>
            </section>
        </div>
    )
}

export default Original;