import React from 'react';
import Menu from './Menu';
import '../styles/areasPractica.css'

const Izq = props => {
    return (
        <ul className="menuIzqResponsive publicaciones">
            <Menu
                bgc={props.bgc21}
                fc={props.fc21}
                endPoint="./2021"
                menuArea="2021"
            />
            <Menu
                bgc={props.bgc}
                fc={props.fc}
                endPoint="./2020"
                menuArea="2020"
            />
            <Menu
                bgc={props.bgc}
                fc={props.fc}
                endPoint="./2019"
                menuArea="2019"
            />
            <Menu
                bgc={props.bgc2}
                fc={props.fc2}
                endPoint="./2018"
                menuArea="2018"
            />
            <Menu
                bgc={props.bgc3}
                fc={props.fc3}
                endPoint="./2017"
                menuArea="2017"
            />
            <Menu
                bgc={props.bgc4}
                fc={props.fc4}
                endPoint="./2016"
                menuArea="2016"
            />
            <Menu
                bgc={props.bgc5}
                fc={props.fc5}
                endPoint="./2015"
                menuArea="2015"
            />
            <Menu
                bgc={props.bgc6}
                fc={props.fc6}
                endPoint="./2014"
                menuArea="2014"
            />
            <Menu
                bgc={props.bgc7}
                fc={props.fc7}
                endPoint="./2013"
                menuArea="2013"
            />
            <Menu
                bgc={props.bgc8}
                fc={props.fc8}
                endPoint="./2012"
                menuArea="2012"
            />
            <Menu
                bgc={props.bgc9}
                fc={props.fc9}
                endPoint="./2011"
                menuArea="2011"
            />
            <Menu
                bgc={props.bgc10}
                fc={props.fc10}
                endPoint="./2010"
                menuArea="2010"
            />
            {/* <Menu
                bgc={props.bgc11}
                fc={props.fc11}
                endPoint="./2009"
                menuArea="2009"
            />
            <Menu
                bgc={props.bgc12}
                fc={props.fc12}
                endPoint="./2008"
                menuArea="2008"
            />
            <Menu
                bgc={props.bgc13}
                fc={props.fc13}
                endPoint="./2007"
                menuArea="2007"
            /> */}
        </ul>
    )
}

export default Izq;