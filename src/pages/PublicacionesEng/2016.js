import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import Once from '../../assets/DocsTBA/2016/atb-16-sept-11.pdf';
import Diez from '../../assets/DocsTBA/2016/atb-16-10.pdf';
import Nueve from '../../assets/DocsTBA/2016/atb-16-09.pdf';
import Ocho from '../../assets/DocsTBA/2016/atb-16-08.pdf';
import Siete from '../../assets/DocsTBA/2016/actualizacion-tributaria-7-2016.pdf';
import Seis from '../../assets/DocsTBA/2016/actualizacion-tributaria-6-2016.pdf';
import Cinco from '../../assets/DocsTBA/2016/actualizacion-tributaria-5-2016.pdf';
import Cuatro from '../../assets/DocsTBA/2016/actualizacion-tributaria-4-2016.pdf';
import Tres from '../../assets/DocsTBA/2016/actualizacion-tributaria-3-2016.pdf';
import Dos from '../../assets/DocsTBA/2016/actualizacion-tributaria-2-2016.pdf';
import Uno from '../../assets/DocsTBA/2016/actualizacion-tributaria-2-2016.pdf';

const P2016 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc4="#656565"
                fc4="#fff" />
                <Dropdown data={props.data}/>
            <div style={{ width: "100%" }}>
                
            </div>
        </div>
    )
}

export default P2016;