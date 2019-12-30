import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
// import Hide from '../components/Hide';
import Oficinas from '../pages/Oficinas';
import Firma from '../pages/Firma';
//Paginas Originales
import Original from './Originals/Original'
import Aduanas from './Originals/Aduanas'
import AsesoriaFis from './Originals/AsesoriaFiscal'
import IndustrisNav from './Originals/IndustriaNav'
import InstitucionesAsist from './Originals/InstitucionesAsist'
import InstitucionesF from './Originals/InstutucionesF'
import LitigioFiscal from './Originals/LitigioFiscal'
import PlaneacionP from './Originals/PlaneacionP'
import ProyectosInfra from './Originals/ProyectosInfra'
import RepresenFis from './Originals/RepresenFiscal'
import Trubutacion from './Originals/Tributacion'
import ValoresP from './Originals/ValoresP'
import VentasDirect from './Originals/VentasDirect'
import Seguros from './Originals/Seguros'
import Fundaciones from './Originals/fundaciones';
import ComercioInter from './Originals/comercioInter';
import Contribuciones from './Originals/contribuciones';
//Equipo
import Team from './Equipo/Equipo'
import Sos002 from './Equipo/sos%002'
import Sos001 from './Equipo/sos%001'
import Sos003 from './Equipo/sos%003'
import Sos004 from './Equipo/sos%004'
import Sos005 from './Equipo/sos%005'
import Sos006 from './Equipo/sos%006'
import Sos007 from './Equipo/sos%007'
import As102 from './Equipo/as%102'
import As101 from './Equipo/as%101'
import As103 from './Equipo/as%103'
import Abo201 from './Equipo/abo%201'
import Abo202 from './Equipo/abo%202'
import Abo203 from './Equipo/abo%203'
import Abo204 from './Equipo/abo%204'
import Abo205 from './Equipo/abo%205'
import Pas301 from './Equipo/pas%301'
import Pas302 from './Equipo/pas%302'
import Pas303 from './Equipo/pas%303'
import Pas304 from './Equipo/pas%304'
import Pas305 from './Equipo/pas%305'
import Pas306 from './Equipo/pas%306'
import Pas307 from './Equipo/pas%307'
import Pas308 from './Equipo/pas%308'
import Pas309 from './Equipo/pas%309'
import Pas310 from './Equipo/pas%310'
import Pas311 from './Equipo/pas%311'
import Pas312 from './Equipo/pas%312'
//Publicaciones
import Public from './Publicaciones/Publicacion'
import P2007 from './Publicaciones/2007'
import P2008 from './Publicaciones/2008'
import P2009 from './Publicaciones/2009'
import P2010 from './Publicaciones/2010'
import P2011 from './Publicaciones/2011'
import P2012 from './Publicaciones/2012'
import P2013 from './Publicaciones/2013'
import P2014 from './Publicaciones/2014'
import P2015 from './Publicaciones/2015'
import P2016 from './Publicaciones/2016'
import P2017 from './Publicaciones/2017'
import P2018 from './Publicaciones/2018'
import P2019 from './Publicaciones/2019'
import P2020 from './Publicaciones/2020'
// English Publications
import PublicEng from './PublicacionesEng/Publicacion'
import P2007Eng from './PublicacionesEng/2007'
import P2008Eng from './PublicacionesEng/2008'
import P2009Eng from './PublicacionesEng/2009'
import P2010Eng from './PublicacionesEng/2010'
import P2011Eng from './PublicacionesEng/2011'
import P2012Eng from './PublicacionesEng/2012'
import P2013Eng from './PublicacionesEng/2013'
import P2014Eng from './PublicacionesEng/2014'
import P2015Eng from './PublicacionesEng/2015'
import P2016Eng from './PublicacionesEng/2016'
import P2017Eng from './PublicacionesEng/2017'
import P2018Eng from './PublicacionesEng/2018'
import P2019Eng from './PublicacionesEng/2019'
import P2020Eng from './PublicacionesEng/2020'
import Esp from '../lang/Esp.json'
import Eng from '../lang/Eng.json'
import Home from './Home';
library.add(fab)

const dataEsp = Esp
const dataEng = Eng

class App extends Component {

  state = {
    data: dataEsp,
    data2: dataEng,
    idioma: "Esp",
    prefix: "",
  }

  componentDidMount() {
    this.state.prefix === "en" && this.state.data === dataEsp && this.state.idioma === "Esp" ? 
    this.setState ({
      data: dataEng,
      idioma: "Eng",
      prefix: "en"
    }) 
    :
    this.setState ({
      data:dataEsp,
      idioma:"Esp",
      prefix: "es"
    })
  }



  handelChangeIdioma = () => {
    this.state.idioma === "Esp" ?
      this.setState({
        data: dataEng,
        idioma: "Eng",
        prefix: "en"
      }
      )
      :
      this.setState({
        data: dataEsp,
        idioma: "Esp",
        prefix: "es"
      }
      )
  }


  render() {
    return (
      <Router>
        <Navbar data={this.state.data} />
        <Switch>
          <Route exact path="/es" component={() => <Home data={this.state.data} />} />
          <Route exact path="/en" component={() => <Home data={this.state.data2} />} />
          <Route path="/es/oficinas" component={() => <Oficinas data={this.state.data} />} />
          <Route path="/en/oficinas" component={() => <Oficinas data={this.state.data2} />} />
          <Route path={`/:${this.state.prefix}/firma`} component={() => <Firma data={this.state.data} />} />
          {/* Original */}
          <Route exact path={`/${this.state.url}/areas/home`} component={() => <Original data={this.state.data} />} />
          <Route exact path={`/${this.state.url2}/areas/home`} component={() => <Original data={this.state.data2} />} />
          <Route exact path="/areas/aduanas" component={() => <Aduanas data={this.state.data} />} />
          <Route exact path="/areas/asesoriafis" component={() => <AsesoriaFis data={this.state.data} />} />
          <Route exact path="/areas/industriasnav" component={() => <IndustrisNav data={this.state.data} />} />
          <Route exact path="/areas/institucionesasist" component={() => <InstitucionesAsist data={this.state.data} />} />
          <Route exact path="/areas/institucionesF" component={() => <InstitucionesF data={this.state.data} />} />
          <Route exact path="/areas/litigiofiscal" component={() => <LitigioFiscal data={this.state.data} />} />
          <Route exact path="/areas/planeacionp" component={() => <PlaneacionP data={this.state.data} />} />
          <Route exact path="/areas/proyectosinfra" component={() => <ProyectosInfra data={this.state.data} />} />
          <Route exact path="/areas/represenfis" component={() => <RepresenFis data={this.state.data} />} />
          <Route exact path="/areas/tributacion" component={() => <Trubutacion data={this.state.data} />} />
          <Route exact path="/areas/valoresp" component={() => <ValoresP data={this.state.data} />} />
          <Route exact path="/areas/ventasdirec" component={() => <VentasDirect data={this.state.data} />} />
          <Route exact path="/areas/seguros" component={() => <Seguros data={this.state.data} />} />
          <Route exact path="/areas/comercioInter" component={() => <ComercioInter data={this.state.data} />} />
          <Route exact path="/areas/contribuciones" component={() => <Contribuciones data={this.state.data} />} />
          <Route exact path="/areas/fundaciones" component={() => <Fundaciones data={this.state.data} />} />
          {/* Equipo */}
          <Route exact path="/equipo" component={() => <Team data={this.state.data} />} />
          <Route exact path="/equipo/sos001" component={() => <Sos001 data={this.state.data} />} />
          <Route exact path="/equipo/sos002" component={() => <Sos002 data={this.state.data} />} />
          <Route exact path="/equipo/sos003" component={() => <Sos003 data={this.state.data} />} />
          <Route exact path="/equipo/sos004" component={() => <Sos004 data={this.state.data} />} />
          <Route exact path="/equipo/sos005" component={() => <Sos005 data={this.state.data} />} />
          <Route exact path="/equipo/sos006" component={() => <Sos006 data={this.state.data} />} />
          <Route exact path="/equipo/sos007" component={() => <Sos007 data={this.state.data} />} />
          <Route exact path="/equipo/as101" component={() => <As101 data={this.state.data} />} />
          <Route exact path="/equipo/as102" component={() => <As102 data={this.state.data} />} />
          <Route exact path="/equipo/as103" component={() => <As103 data={this.state.data} />} />
          <Route exact path="/equipo/abo201" component={() => <Abo201 data={this.state.data} />} />
          <Route exact path="/equipo/abo202" component={() => <Abo202 data={this.state.data} />} />
          <Route exact path="/equipo/abo203" component={() => <Abo203 data={this.state.data} />} />
          <Route exact path="/equipo/abo204" component={() => <Abo204 data={this.state.data} />} />
          <Route exact path="/equipo/abo205" component={() => <Abo205 data={this.state.data} />} />
          <Route exact path="/equipo/pas301" component={() => <Pas301 data={this.state.data} />} />
          <Route exact path="/equipo/pas302" component={() => <Pas302 data={this.state.data} />} />
          <Route exact path="/equipo/pas303" component={() => <Pas303 data={this.state.data} />} />
          <Route exact path="/equipo/pas304" component={() => <Pas304 data={this.state.data} />} />
          <Route exact path="/equipo/pas305" component={() => <Pas305 data={this.state.data} />} />
          <Route exact path="/equipo/pas306" component={() => <Pas306 data={this.state.data} />} />
          <Route exact path="/equipo/pas307" component={() => <Pas307 data={this.state.data} />} />
          <Route exact path="/equipo/pas308" component={() => <Pas308 data={this.state.data} />} />
          <Route exact path="/equipo/pas309" component={() => <Pas309 data={this.state.data} />} />
          <Route exact path="/equipo/pas310" component={() => <Pas310 data={this.state.data} />} />
          <Route exact path="/equipo/pas311" component={() => <Pas311 data={this.state.data} />} />
          <Route exact path="/equipo/pas312" component={() => <Pas312 data={this.state.data} />} />
          {/* Public */}
          <Route exact path="/publicaciones/" component={() => <Public data={this.state.data} />} />
          <Route exact path="/publicaciones/2007" component={() => <P2007 data={this.state.data} />} />
          <Route exact path="/publicaciones/2008" component={() => <P2008 data={this.state.data} />} />
          <Route exact path="/publicaciones/2009" component={() => <P2009 data={this.state.data} />} />
          <Route exact path="/publicaciones/2010" component={() => <P2010 data={this.state.data} />} />
          <Route exact path="/publicaciones/2011" component={() => <P2011 data={this.state.data} />} />
          <Route exact path="/publicaciones/2012" component={() => <P2012 data={this.state.data} />} />
          <Route exact path="/publicaciones/2013" component={() => <P2013 data={this.state.data} />} />
          <Route exact path="/publicaciones/2014" component={() => <P2014 data={this.state.data} />} />
          <Route exact path="/publicaciones/2015" component={() => <P2015 data={this.state.data} />} />
          <Route exact path="/publicaciones/2016" component={() => <P2016 data={this.state.data} />} />
          <Route exact path="/publicaciones/2017" component={() => <P2017 data={this.state.data} />} />
          <Route exact path="/publicaciones/2018" component={() => <P2018 data={this.state.data} />} />
          <Route exact path="/publicaciones/2019" component={() => <P2019 data={this.state.data} />} />
          <Route exact path="/publicaciones/2020" component={() => <P2020 data={this.state.data} />} />
          {/* English */}
          <Route exact path="/en/publicaciones/2007" component={() => <P2007Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2008" component={() => <P2008Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2009" component={() => <P2009Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2010" component={() => <P2010Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2011" component={() => <P2011Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2012" component={() => <P2012Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2013" component={() => <P2013Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2014" component={() => <P2014Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2015" component={() => <P2015Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2016" component={() => <P2016Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2017" component={() => <P2017Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2018" component={() => <P2018Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2019" component={() => <P2019Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2020" component={() => <P2020Eng data={this.state.data2} />} />
        </Switch>

        <Footer handelChangeIdioma={this.handelChangeIdioma} idioma={this.state.idioma} data={this.state.data} />
      </Router>
    );
  }
}

export default App;
