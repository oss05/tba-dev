import React, { Component } from 'react'
import Logo from '../assets/logoSoma.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/footer.css';
import wts from '../assets/wts.png';
import latax from '../assets/latax.png';

const imagesPath = {
    mx: 'https://cdn.countryflags.com/thumbs/mexico/flag-round-250.png',
    us: 'https://cdn.countryflags.com/thumbs/united-states-of-america/flag-round-250.png'
}

class Footer extends Component {


    state = {
        open: true,
    }
    toggleImage = () => {
        this.setState(state => ({ open: !state.open }))
        this.props.handelChangeIdioma()
    }
    getImageName = () => this.state.open ? 'us' : 'mx'


    render() {
        const imageName = this.getImageName();
        return (
            <div className="footerContainer">
                <section className="langContainer">
                    <img style={{ width: '45px' }} onChange={this.props.handelChangeIdioma} src={imagesPath[imageName]} onClick={this.toggleImage} />
                    {/* <select onChange={props.handelChangeIdioma} style={{border:"solid 1px"}}>
                    <option value="Esp"><img src={props.data.footer.bandera} alt=""/></option>
                    <option value="Eng">{props.data.footer.bandera}</option>
                </select> */}
                </section>
                <div className="infoGroup">
                    <section className="d-flex justify-content-around">
                        <a href="https://www.wts.com/global" target="_blank"><img src={wts} alt="wts" /></a>
                        <a href="http://lataxnet.net/" target="_blank"><img src={latax} alt="latax" /></a>
                    </section>
                    <section className="d-flex">
                        <article className="rightsContainer flex-column">
                            <p style={{marginBottom:0, fontSize: "10px"}}>{this.props.data.footer.derechos}</p>
                            <a href="" style={{fontSize:"12px", color: "#000", textDecoration: "none"}}><p>{this.props.data.footer.privacidad}</p></a>
                        </article>
                        <article className="designContainer">
                            <p>{this.props.data.footer.desarrollo}</p>
                            <img src={Logo} alt="logo soma" />
                        </article>
                    </section>
                </div>

                <section className="linkedinContainer">
                    <a href="" target="_blank"><FontAwesomeIcon className="linkedin" icon={['fab', 'linkedin-in']} /></a>
                </section>
            </div>
        );
    }
}

export default Footer;

