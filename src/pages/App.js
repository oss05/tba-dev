import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'

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
//Paracticas
import Banking from './Practicas/Banking'
import Corporate from './Practicas/Corporate'
import Employee from './Practicas/Employee'
import Energy from './Practicas/Energy'
import FATCA from './Practicas/FATCA'
import Indirect from './Practicas/Indirect'
import Individuals from './Practicas/Individuals'
import Instituciones from './Practicas/Instituciones'
import Insurance from './Practicas/Insurance'
import Internacional from './Practicas/Internacional'
import Litigation from './Practicas/Litigation'
import LocalTaxation from './Practicas/LocalTaxation'
import MyA from './Practicas/M&A'
import Navieras from './Practicas/Navieras'
import Practicas from './Practicas/Practicas'
import Private from './Practicas/Private'
import ProBono from './Practicas/ProBono'
import Project from './Practicas/Project'
import Securities from './Practicas/Securities'
import Tax from './Practicas/Tax'
import TaxContro from './Practicas/TaxContro'
import Trade from './Practicas/Trade'
import Trasfer from './Practicas/Transfer'
import VentaDirecta from './Practicas/VentaDirecta'
//Equipo
import Team from './Equipo/Equipo'
import Sos002 from './Equipo/sos%002'
import Sos001 from './Equipo/sos%001'
import Sos003 from './Equipo/sos%003'
import Sos004 from './Equipo/sos%004'
import Sos005 from './Equipo/sos%005'
import Sos006 from './Equipo/sos%006'
import Sos007 from './Equipo/sos%007'
import Sos008 from './Equipo/sos%008'
import As102 from './Equipo/as%102'
import As101 from './Equipo/as%101'
import As103 from './Equipo/as%103'
import Cou001 from './Equipo/cou%001'
import Abo201 from './Equipo/abo%201'
import Abo202 from './Equipo/abo%202'
import Abo203 from './Equipo/abo%203'
import Abo204 from './Equipo/abo%204'
import Abo205 from './Equipo/abo%205'
import Abo206 from './Equipo/Yarabi'
import Pas301 from './Equipo/pas%301'
import Pas302 from './Equipo/pas%302'
import Pas303 from './Equipo/pas%303'
import Pas304 from './Equipo/pas%304'
import Pas305 from './Equipo/pas%305'
import Pas306 from './Equipo/pas%306'
import Pas308 from './Equipo/pas%308'
import Pas309 from './Equipo/pas%309'
import Pas310 from './Equipo/pas%310'
import Pas311 from './Equipo/pas%311'
import Pas312 from './Equipo/pas%312'
import Pas313 from './Equipo/pas%313'
import Pas314 from './Equipo/MJMG'
import Pas315 from './Equipo/ALHG'
import Pas316 from './Equipo/ECS'
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
import P2020Esp from './Publicaciones/2020'
import P2021Esp from './Publicaciones/2021'
// English Publications
import PublicEng from './PublicacionesEng/Publicacion'
import P2005Eng from './PublicacionesEng/2005'
import P2006Eng from './PublicacionesEng/2006'
import P2007Eng from './PublicacionesEng/2007'
import P2009Eng from './PublicacionesEng/2009'
import P2010Eng from './PublicacionesEng/2010'
import P2011Eng from './PublicacionesEng/2011'
import P2012Eng from './PublicacionesEng/2012'
import P2013Eng from './PublicacionesEng/2013'
import P2014Eng from './PublicacionesEng/2014'
import P2015Eng from './PublicacionesEng/2015'
import P2016Eng from './PublicacionesEng/2016'
import P2017Eng from './PublicacionesEng/2017'
import P2019Eng from './PublicacionesEng/2019'
import P2020Eng from './PublicacionesEng/2020'
import P2021Eng from './PublicacionesEng/2021'
import Esp from '../lang/Esp.json'
import Eng from '../lang/Eng.json'
import Home from './Home';
library.add(fab)

function initializeReactGA() {
  ReactGA.initialize('UA-45343708-1');
  ReactGA.pageview('/');
}

initializeReactGA()


// const tagManagerArgs = {
//   gtmId: 'GTM-PP2QRTD'
// }

// TagManager.initialize(tagManagerArgs)

const dataEsp = Esp;
const dataEng = Eng;
const publicEng = P2020Eng;
const publicEsp = P2020Esp;

class App extends Component {

  state = {
    data: dataEsp,
    data2: dataEng,
    idioma: "Esp",
    publicaciones: publicEng,
    route: "es",
    routeInverted: "en",
    thirdRoute: "en"
  }



  handelChangeIdioma = () => {
    this.state.idioma === "Esp" ?
      this.setState({
        data: dataEng,
        idioma: "Eng",
        route: "en",
        routeInverted: "",
        thirdRoute: "en"
      }
      )
      :
      this.setState({
        data: dataEsp,
        idioma: "Esp",
        route: "es",
        routeInverted: "en",
        thirdRoute: ""
      }
      )
  }


  render() {
    return (
      <Router>
        <Navbar data={this.state.data} route={this.state.route} thirdRoute={this.state.thirdRoute} />
        <Route path="/oficinas" component={() => <Oficinas data={this.state.data} />} />
        <Route path="/firma" component={() => <Firma data={this.state.data} />} />
        {/* Original */}
        <Route exact path="/areas/home" component={() => <Original data={this.state.data} />} />
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
        <Route exact path="/equipo/sos008" component={() => <Sos008 data={this.state.data} />} />
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
        <Route exact path="/equipo/pas308" component={() => <Pas308 data={this.state.data} />} />
        <Route exact path="/equipo/pas309" component={() => <Pas309 data={this.state.data} />} />
        <Route exact path="/equipo/pas310" component={() => <Pas310 data={this.state.data} />} />
        <Route exact path="/equipo/pas311" component={() => <Pas311 data={this.state.data} />} />
        <Route exact path="/equipo/pas312" component={() => <Pas312 data={this.state.data} />} />
        <Route exact path="/equipo/pas313" component={() => <Pas313 data={this.state.data} />} />
        {/* Public */}
        <Switch >
          <Route exact path="/" component={() => <Home data={this.state.data} handelChangeIdioma={this.handelChangeIdioma} idioma={this.state.idioma} />} />
          <Route exact path="/en" component={() => <Home data={this.state.data2} handelChangeIdioma={this.handelChangeIdioma} idioma={this.state.idioma} route={this.state.route} />} />
          <Route path="/es/oficinas" component={() => <Oficinas data={this.state.data} />} />
          <Route path="/es/firma" component={() => <Firma data={this.state.data} />} />
          {/* Original */}
          <Route exact path="/es/areas/home" component={() => <Original data={this.state.data} />} />
          <Route exact path="/es/areas/aduanas" component={() => <Aduanas data={this.state.data} />} />
          <Route exact path="/es/areas/asesoriafis" component={() => <AsesoriaFis data={this.state.data} />} />
          <Route exact path="/es/areas/industriasnav" component={() => <IndustrisNav data={this.state.data} />} />
          <Route exact path="/es/areas/institucionesasist" component={() => <InstitucionesAsist data={this.state.data} />} />
          <Route exact path="/es/areas/institucionesF" component={() => <InstitucionesF data={this.state.data} />} />
          <Route exact path="/es/areas/litigiofiscal" component={() => <LitigioFiscal data={this.state.data} />} />
          <Route exact path="/es/areas/planeacionp" component={() => <PlaneacionP data={this.state.data} />} />
          <Route exact path="/es/areas/proyectosinfra" component={() => <ProyectosInfra data={this.state.data} />} />
          <Route exact path="/es/areas/represenfis" component={() => <RepresenFis data={this.state.data} />} />
          <Route exact path="/es/areas/tributacion" component={() => <Trubutacion data={this.state.data} />} />
          <Route exact path="/es/areas/valoresp" component={() => <ValoresP data={this.state.data} />} />
          <Route exact path="/es/areas/ventasdirec" component={() => <VentasDirect data={this.state.data} />} />
          <Route exact path="/es/areas/seguros" component={() => <Seguros data={this.state.data} />} />
          <Route exact path="/es/areas/comercioInter" component={() => <ComercioInter data={this.state.data} />} />
          <Route exact path="/es/areas/contribuciones" component={() => <Contribuciones data={this.state.data} />} />
          <Route exact path="/es/areas/fundaciones" component={() => <Fundaciones data={this.state.data} />} />
          {/* Equipo */}
          <Route exact path="/es/equipo" component={() => <Team data={this.state.data} />} />
          <Route exact path="/es/equipo/sos001" component={() => <Sos001 data={this.state.data} />} />
          <Route exact path="/es/equipo/sos002" component={() => <Sos002 data={this.state.data} />} />
          <Route exact path="/es/equipo/sos003" component={() => <Sos003 data={this.state.data} />} />
          <Route exact path="/es/equipo/sos004" component={() => <Sos004 data={this.state.data} />} />
          <Route exact path="/es/equipo/sos005" component={() => <Sos005 data={this.state.data} />} />
          <Route exact path="/es/equipo/sos006" component={() => <Sos006 data={this.state.data} />} />
          <Route exact path="/es/equipo/sos007" component={() => <Sos007 data={this.state.data} />} />
          <Route exact path="/es/equipo/sos008" component={() => <Sos008 data={this.state.data} />} />
          <Route exact path="/es/equipo/as101" component={() => <As101 data={this.state.data} />} />
          <Route exact path="/es/equipo/as102" component={() => <As102 data={this.state.data} />} />
          <Route exact path="/es/equipo/as103" component={() => <As103 data={this.state.data} />} />
          <Route exact path="/es/equipo/abo201" component={() => <Abo201 data={this.state.data} />} />
          <Route exact path="/es/equipo/cou001" component={() => <Cou001 data={this.state.data} />} />
          <Route exact path="/es/equipo/abo202" component={() => <Abo202 data={this.state.data} />} />
          <Route exact path="/es/equipo/abo203" component={() => <Abo203 data={this.state.data} />} />
          <Route exact path="/es/equipo/abo204" component={() => <Abo204 data={this.state.data} />} />
          <Route exact path="/es/equipo/abo205" component={() => <Abo205 data={this.state.data} />} />
          <Route exact path="/es/equipo/abo206" component={() => <Abo206 data={this.state.data} />} />
          <Route exact path="/es/equipo/pas301" component={() => <Pas301 data={this.state.data} />} />
          <Route exact path="/es/equipo/pas302" component={() => <Pas302 data={this.state.data} />} />
          <Route exact path="/es/equipo/pas303" component={() => <Pas303 data={this.state.data} />} />
          <Route exact path="/es/equipo/pas304" component={() => <Pas304 data={this.state.data} />} />
          <Route exact path="/es/equipo/pas305" component={() => <Pas305 data={this.state.data} />} />
          <Route exact path="/es/equipo/pas306" component={() => <Pas306 data={this.state.data} />} />
          <Route exact path="/es/equipo/pas308" component={() => <Pas308 data={this.state.data} />} />
          <Route exact path="/es/equipo/pas309" component={() => <Pas309 data={this.state.data} />} />
          <Route exact path="/es/equipo/pas310" component={() => <Pas310 data={this.state.data} />} />
          <Route exact path="/es/equipo/pas311" component={() => <Pas311 data={this.state.data} />} />
          <Route exact path="/es/equipo/pas312" component={() => <Pas312 data={this.state.data} />} />
          <Route exact path="/es/equipo/pas313" component={() => <Pas313 data={this.state.data} />} />
          <Route exact path="/es/equipo/pas314" component={() => <Pas314 data={this.state.data} />} />
          <Route exact path="/es/equipo/pas315" component={() => <Pas315 data={this.state.data} />} />
          <Route exact path="/es/equipo/pas316" component={() => <Pas316 data={this.state.data} />} />
          <Route exact path="/es/publicaciones/" component={() => <Public data={this.state.data} />} />
          <Route exact path="/es/publicaciones/2007" component={() => <P2007 data={this.state.data} />} />
          <Route exact path="/es/publicaciones/2008" component={() => <P2008 data={this.state.data} />} />
          <Route exact path="/es/publicaciones/2009" component={() => <P2009 data={this.state.data} />} />
          <Route exact path="/es/publicaciones/2010" component={() => <P2010 data={this.state.data} />} />
          <Route exact path="/es/publicaciones/2011" component={() => <P2011 data={this.state.data} />} />
          <Route exact path="/es/publicaciones/2012" component={() => <P2012 data={this.state.data} />} />
          <Route exact path="/es/publicaciones/2013" component={() => <P2013 data={this.state.data} />} />
          <Route exact path="/es/publicaciones/2014" component={() => <P2014 data={this.state.data} />} />
          <Route exact path="/es/publicaciones/2015" component={() => <P2015 data={this.state.data} />} />
          <Route exact path="/es/publicaciones/2016" component={() => <P2016 data={this.state.data} />} />
          <Route exact path="/es/publicaciones/2017" component={() => <P2017 data={this.state.data} />} />
          <Route exact path="/es/publicaciones/2018" component={() => <P2018 data={this.state.data} />} />
          <Route exact path="/es/publicaciones/2019" component={() => <P2019 data={this.state.data} />} />
          <Route exact path={`/es/publicaciones/2020`} component={() => <P2020Esp data={this.state.data} />} />
          <Route exact path={`/es/publicaciones/2021`} component={() => <P2021Esp data={this.state.data} />} />
          {/* English */}
          <Route path="/en/oficinas" component={() => <Oficinas data={this.state.data} />} />
          <Route path="/en/firma" component={() => <Firma data={this.state.data} />} />
          {/* Original */}
          <Route exact path="/en/areas/home" component={() => <Original data={this.state.data} />} />
          <Route exact path="/en/areas/aduanas" component={() => <Aduanas data={this.state.data} />} />
          <Route exact path="/en/areas/asesoriafis" component={() => <AsesoriaFis data={this.state.data} />} />
          <Route exact path="/en/areas/industriasnav" component={() => <IndustrisNav data={this.state.data} />} />
          <Route exact path="/en/areas/institucionesasist" component={() => <InstitucionesAsist data={this.state.data} />} />
          <Route exact path="/en/areas/institucionesF" component={() => <InstitucionesF data={this.state.data} />} />
          <Route exact path="/en/areas/litigiofiscal" component={() => <LitigioFiscal data={this.state.data} />} />
          <Route exact path="/en/areas/planeacionp" component={() => <PlaneacionP data={this.state.data} />} />
          <Route exact path="/en/areas/proyectosinfra" component={() => <ProyectosInfra data={this.state.data} />} />
          <Route exact path="/en/areas/represenfis" component={() => <RepresenFis data={this.state.data} />} />
          <Route exact path="/en/areas/tributacion" component={() => <Trubutacion data={this.state.data} />} />
          <Route exact path="/en/areas/valoresp" component={() => <ValoresP data={this.state.data} />} />
          <Route exact path="/en/areas/ventasdirec" component={() => <VentasDirect data={this.state.data} />} />
          <Route exact path="/en/areas/seguros" component={() => <Seguros data={this.state.data} />} />
          <Route exact path="/en/areas/comercioInter" component={() => <ComercioInter data={this.state.data} />} />
          <Route exact path="/en/areas/contribuciones" component={() => <Contribuciones data={this.state.data} />} />
          <Route exact path="/en/areas/fundaciones" component={() => <Fundaciones data={this.state.data} />} />
          {/* Equipo */}
          <Route exact path="/en/equipo" component={() => <Team data={this.state.data} />} />
          <Route exact path="/en/equipo/sos001" component={() => <Sos001 data={this.state.data} />} />
          <Route exact path="/en/equipo/sos002" component={() => <Sos002 data={this.state.data} />} />
          <Route exact path="/en/equipo/sos003" component={() => <Sos003 data={this.state.data} />} />
          <Route exact path="/en/equipo/sos004" component={() => <Sos004 data={this.state.data} />} />
          <Route exact path="/en/equipo/sos005" component={() => <Sos005 data={this.state.data} />} />
          <Route exact path="/en/equipo/sos006" component={() => <Sos006 data={this.state.data} />} />
          <Route exact path="/en/equipo/sos007" component={() => <Sos007 data={this.state.data} />} />
          <Route exact path="/en/equipo/sos008" component={() => <Sos008 data={this.state.data} />} />
          <Route exact path="/en/equipo/as101" component={() => <As101 data={this.state.data} />} />
          <Route exact path="/en/equipo/as102" component={() => <As102 data={this.state.data} />} />
          <Route exact path="/en/equipo/as103" component={() => <As103 data={this.state.data} />} />
          <Route exact path="/en/equipo/abo201" component={() => <Abo201 data={this.state.data} />} />
          <Route exact path="/en/equipo/cou001" component={() => <Cou001 data={this.state.data} />} />
          <Route exact path="/en/equipo/abo202" component={() => <Abo202 data={this.state.data} />} />
          <Route exact path="/en/equipo/abo203" component={() => <Abo203 data={this.state.data} />} />
          <Route exact path="/en/equipo/abo204" component={() => <Abo204 data={this.state.data} />} />
          <Route exact path="/en/equipo/abo205" component={() => <Abo205 data={this.state.data} />} />
          <Route exact path="/en/equipo/abo206" component={() => <Abo206 data={this.state.data} />} />
          <Route exact path="/en/equipo/pas301" component={() => <Pas301 data={this.state.data} />} />
          <Route exact path="/en/equipo/pas302" component={() => <Pas302 data={this.state.data} />} />
          <Route exact path="/en/equipo/pas303" component={() => <Pas303 data={this.state.data} />} />
          <Route exact path="/en/equipo/pas304" component={() => <Pas304 data={this.state.data} />} />
          <Route exact path="/en/equipo/pas305" component={() => <Pas305 data={this.state.data} />} />
          <Route exact path="/en/equipo/pas306" component={() => <Pas306 data={this.state.data} />} />
          <Route exact path="/en/equipo/pas308" component={() => <Pas308 data={this.state.data} />} />
          <Route exact path="/en/equipo/pas309" component={() => <Pas309 data={this.state.data} />} />
          <Route exact path="/en/equipo/pas310" component={() => <Pas310 data={this.state.data} />} />
          <Route exact path="/en/equipo/pas311" component={() => <Pas311 data={this.state.data} />} />
          <Route exact path="/en/equipo/pas312" component={() => <Pas312 data={this.state.data} />} />
          <Route exact path="/en/equipo/pas313" component={() => <Pas313 data={this.state.data} />} />
          <Route exact path="/en/equipo/pas314" component={() => <Pas314 data={this.state.data} />} />
          <Route exact path="/en/equipo/pas315" component={() => <Pas315 data={this.state.data} />} />
          <Route exact path="/en/equipo/pas316" component={() => <Pas316 data={this.state.data} />} />
          <Route exact path="/en/publicaciones/2005" component={() => <P2005Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2006" component={() => <P2006Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2007" component={() => <P2007Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2009" component={() => <P2009Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2010" component={() => <P2010Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2011" component={() => <P2011Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2012" component={() => <P2012Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2013" component={() => <P2013Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2014" component={() => <P2014Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2015" component={() => <P2015Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2016" component={() => <P2016Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2017" component={() => <P2017Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2019" component={() => <P2019Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2020" component={() => <P2020Eng data={this.state.data2} />} />
          <Route exact path="/en/publicaciones/2021" component={() => <P2021Eng data={this.state.data2} />} />
        </Switch>

        <Footer handelChangeIdioma={this.handelChangeIdioma} idioma={this.state.idioma} data={this.state.data} route={this.state.route} routeInverted={this.state.routeInverted} />
      </Router>
    );
  }
}

export default App;
