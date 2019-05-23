import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
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
import Seguros  from './Originals/Seguros'
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
import Esp from '../lang/Esp.json'
import Eng from '../lang/Eng.json'
import Home from './Home';
library.add(fab)

const dataEsp = Esp
const dataEng = Eng

class App extends Component {

  state = {
    data: dataEsp
  }

  handelChangeIdioma = (e) => {
    const idioma = e.target.value
    this.setState({
      idioma: idioma,
      data: idioma === 'Esp' ? dataEsp : dataEng
    })
    console.log(this.state.idioma)
    console.log(this.state.data)
  }

  render() {
    return (
      <Router>
        <Navbar data={this.state.data} />
        <Route exact path="/" component={() => <Home data={this.state.data} />} />
        <Route path="/oficinas" component={() => <Oficinas data={this.state.data} />} />
        <Route path="/firma" component={() => <Firma data={this.state.data} />} />
        {/* Original */}
        <Route exact path="/areas" component={() => <Original data= {this.state.data}/>}/>
            <Route exact path="/areas/" component={() => <Aduanas data= {this.state.data}/>}/>
            <Route exact path="/areas/" component={() => <AsesoriaFis data= {this.state.data}/>}/>
            <Route exact path="/areas/" component={() => <IndustrisNav data= {this.state.data}/>}/>
            <Route exact path="/areas/" component={() => <InstitucionesAsist data= {this.state.data}/>}/>
            <Route exact path="/areas/" component={() => <InstitucionesF data= {this.state.data}/>}/>
            <Route exact path="/areas/" component={() => <LitigioFiscal data= {this.state.data}/>}/>
            <Route exact path="/areas/" component={() => <PlaneacionP data= {this.state.data}/>}/>
            <Route exact path="/areas/" component={() => <ProyectosInfra data= {this.state.data}/>}/>
            <Route exact path="/areas/" component={() => <RepresenFis data= {this.state.data}/>}/>
            <Route exact path="/areas/" component={() => <Trubutacion data= {this.state.data}/>}/>
            <Route exact path="/areas/" component={() => <ValoresP data= {this.state.data}/>}/>
            <Route exact path="/areas/" component={() => <VentasDirect data= {this.state.data}/>}/>
            <Route exact path="/areas/" component={() => <Seguros data= {this.state.data}/>}/>
        {/* Practicas */}
        <Route exact path="/practicas" component={() => <Practicas data={this.state.data} />} />
        <Route exact path="/practicas/private" component={() => <Private data={this.state.data} />} />
        <Route exact path="/practicas/banking" component={() => <Banking data={this.state.data} />} />
        <Route exact path="/practicas/indirect" component={() => <Indirect data={this.state.data} />} />
        <Route exact path="/practicas/tax" component={() => <Tax data={this.state.data} />} />
        <Route exact path="/practicas/taxContro" component={() => <TaxContro data={this.state.data} />} />
        <Route exact path="/practicas/navieras" component={() => <Navieras data={this.state.data} />} />
        <Route exact path="/practicas/locTaxation" component={() => <LocalTaxation data={this.state.data} />} />
        <Route exact path="/practicas/proBono" component={() => <ProBono data={this.state.data} />} />
        <Route exact path="/practicas/insurance" component={() => <Insurance data={this.state.data} />} />
        <Route exact path="/practicas/ventaDirecta" component={() => <VentaDirecta data={this.state.data} />} />
        <Route exact path="/practicas/employeeBenefits" component={() => <Employee data={this.state.data} />} />
        <Route exact path="/practicas/energy" component={() => <Energy data={this.state.data} />} />
        <Route exact path="/practicas/corporTaxa" component={() => <Corporate data={this.state.data} />} />
        <Route exact path="/practicas/m$a" component={() => <MyA data={this.state.data} />} />
        <Route exact path="/practicas/litigation" component={() => <Litigation data={this.state.data} />} />
        <Route exact path="/practicas/transfer-pri" component={() => <Trasfer data={this.state.data} />} />
        <Route exact path="/practicas/instFin" component={() => <Instituciones data={this.state.data} />} />
        <Route exact path="/practicas/interTaxation" component={() => <Internacional data={this.state.data} />} />
        <Route exact path="/practicas/trade" component={() => <Trade data={this.state.data} />} />
        <Route exact path="/practicas/projectFinal" component={() => <Project data={this.state.data} />} />
        <Route exact path="/practicas/fatcaCrs" component={() => <FATCA data={this.state.data} />} />
        <Route exact path="/practicas/individuals" component={() => <Individuals data={this.state.data} />} />
        <Route exact path="/practicas/securitiesFinalProducts" component={() => <Securities data={this.state.data} />} />
        {/* Equipo */}
        <Route exact path="/equipo" component={() => <Team data={this.state.data} />} />
        <Route exact path="/equipo/sos%002" component={() => <Sos001 data={this.state.data} />} />
        <Route exact path="/equipo/sos%001" component={() => <Sos002 data={this.state.data} />} />
        <Route exact path="/equipo/sos%003" component={() => <Sos003 data={this.state.data} />} />
        <Route exact path="/equipo/sos%004" component={() => <Sos004 data={this.state.data} />} />
        <Route exact path="/equipo/sos%005" component={() => <Sos005 data={this.state.data} />} />
        <Route exact path="/equipo/sos%006" component={() => <Sos006 data={this.state.data} />} />
        <Route exact path="/equipo/sos%007" component={() => <Sos007 data={this.state.data} />} />
        <Route exact path="/equipo/as%101" component={() => <As101 data={this.state.data} />} />
        <Route exact path="/equipo/as%102" component={() => <As102 data={this.state.data} />} />
        <Route exact path="/equipo/as%103" component={() => <As103 data={this.state.data} />} />
        <Route exact path="/equipo/abo%201" component={() => <Abo201 data={this.state.data} />} />
        <Route exact path="/equipo/abo%202" component={() => <Abo202 data={this.state.data} />} />
        <Route exact path="/equipo/abo%203" component={() => <Abo203 data={this.state.data} />} />
        <Route exact path="/equipo/abo%204" component={() => <Abo204 data={this.state.data} />} />
        <Route exact path="/equipo/abo%205" component={() => <Abo205 data={this.state.data} />} />
        <Route exact path="/equipo/pas%301" component={() => <Pas301 data={this.state.data} />} />
        <Route exact path="/equipo/pas%302" component={() => <Pas302 data={this.state.data} />} />
        <Route exact path="/equipo/pas%303" component={() => <Pas303 data={this.state.data} />} />
        <Route exact path="/equipo/pas%304" component={() => <Pas304 data={this.state.data} />} />
        <Route exact path="/equipo/pas%305" component={() => <Pas305 data={this.state.data} />} />
        <Route exact path="/equipo/pas%306" component={() => <Pas306 data={this.state.data} />} />
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
        <Footer handelChangeIdioma={this.handelChangeIdioma} idioma={this.state.idioma} data={this.state.data} />
      </Router>
    );
  }
}

export default App;
