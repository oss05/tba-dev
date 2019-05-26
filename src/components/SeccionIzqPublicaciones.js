import React from 'react';
import Menu from './Menu';
import '../styles/areasPractica.css'

const Izq = props => {
    return(
        <ul className="menuIzq publicaciones">
            <Menu
                endPoint="./2019"
                menuArea="2019"
            />
            <Menu
             endPoint="./2018"
             menuArea="2018"
             />
            <Menu
             endPoint="./2017"
             menuArea="2017"
             />
             <Menu
             endPoint="./2016"
             menuArea="2016"
             />
             <Menu
             endPoint="./2015"
             menuArea="2015"
             />
             <Menu
             endPoint="./2014"
             menuArea="2014"
             />
             <Menu
             endPoint="./2013"
             menuArea="2013"
             />
             <Menu
             endPoint="./2012"
             menuArea="2012"
             />
             <Menu
             endPoint="./2011"
             menuArea="2011"
             />
             <Menu
             endPoint="./2010"
             menuArea="2010"
             />
             <Menu
             endPoint="./2009"
             menuArea="2009"
             />
             <Menu
             endPoint="./2008"
             menuArea="2008"
             />
             <Menu
             endPoint="./2007"
             menuArea="2007"
             />
        </ul>
    )
}

export default Izq;