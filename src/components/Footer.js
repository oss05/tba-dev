import React from 'react';
import Logo from '../assets/logoSoma.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/footer.css';

const Footer = (props) => {
    return (

        <div className="footerContainer">
            <section className="langContainer">
                <select onChange={props.handelChangeIdioma} style={{border:"solid 1px"}}>
                    <option value="Esp">ESP</option>
                    <option value="Eng">ENG</option>
                </select>
            </section>
            <div className="infoGroup">
                <section className="rightsContainer">
                    <p>{props.data.footer.derechos}</p>
                </section>
                <section className="designContainer">
                    <p>{props.data.footer.desarrollo}</p>
                    <img src={Logo} alt="logo soma" />
                </section>
            </div>

            <section className="linkedinContainer">
                <a href="" target="_blank"><FontAwesomeIcon className="linkedin" icon={['fab', 'linkedin-in']} /></a>
            </section>
        </div>
    )

}

export default Footer

