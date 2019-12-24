import React, { Component } from 'react'
import Logo from '../assets/logoSoma.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/footer.css';
import wts from '../assets/wts.png';
import latax from '../assets/latax.png';
import avisoPrivacidad from '../assets/AvisoDePrivacidad.pdf';

const imagesPath = {
    mx: 'https://cdn.countryflags.com/thumbs/mexico/flag-round-250.png',
    us: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/13/United-kingdom_flag_icon_round.svg/512px-United-kingdom_flag_icon_round.svg.png'
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
                    <img style={{ width: '40px' }} onChange={this.props.handelChangeIdioma} src={imagesPath[imageName]} onClick={this.toggleImage} />
                    {/* <select onChange={props.handelChangeIdioma} style={{border:"solid 1px"}}>
                    <option value="Esp"><img src={props.data.footer.bandera} alt=""/></option>
                    <option value="Eng">{props.data.footer.bandera}</option>
                </select> */}
                </section>
                <div className="infoGroup">
                    <section className="d-flex flex-column flex-md-row justify-content-around">
                        <a href="https://www.wts.com/global" target="_blank"><img src={wts} alt="wts" /></a>
                        <a href="http://lataxnet.net/" target="_blank" className="mt-4 mt-lg-0"><img src={latax} alt="latax" /></a>
                    </section>
                    <section className="d-flex">
                        <article className="rightsContainer flex-column mt-4 mt-lg-0">
                            <p style={{marginBottom:0, fontSize: "10px",width: "11em"}} className="mb-3 mb-lg-0 text-center">{this.props.data.footer.derechos}</p>
                            <a href={avisoPrivacidad} target="_blank" style={{fontSize:"12px", color: "#000", textDecoration: "none", textAlign: "center"}}>
                                <p>{this.props.data.footer.privacidad}</p>
                            </a>
                        </article>
                        <article className="designContainer">
                            <p>{this.props.data.footer.desarrollo}</p>
                            <img src={Logo} alt="logo soma" />
                        </article>
                    </section>
                </div>

                <section className="linkedinContainer">
                    <a href="https://www.linkedin.com/company/turanzas-bravo-&-ambrosi/?viewAsMember=true" target="_blank"><FontAwesomeIcon className="linkedin" icon={['fab', 'linkedin-in']} /></a>
                </section>
            </div>
        );
    }
}

export default Footer;

