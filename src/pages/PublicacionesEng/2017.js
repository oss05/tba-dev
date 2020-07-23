import React from 'react';
import Izq from '../../components/SeccionIzqPublicaciones';
import Dropdown from '../../components/DropdownPublicaciones';
import Badge from '../../components/BadgePublicaciones';
import Cuatro from '../../assets/DocsTBA/2017/at-04-17.pdf';
import Tres from '../../assets/DocsTBA/2017/at-03-17.pdf';
import Dos from '../../assets/DocsTBA/2017/at-02-17.pdf';
import Uno from '../../assets/DocsTBA/2017/at-01-17.pdf';

const P2017 = props => {
    return (
        <div className="page">
            <Izq data={props.data}
                bgc3="#656565"
                fc3="#fff" />
            <Dropdown data={props.data} />
            <div style={{ width: "100%" }}>
               
            </div>
        </div>
    )
}

export default P2017;