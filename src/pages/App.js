import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Esp from '../lang/Esp.json'
import Eng from '../lang/Eng.json'
import Home from './Home';
import Uno from './paginaUno';
import Dos from './paginaDos';
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
          <Navbar data = {this.state.data} />
          <Route exact path="/"  component={() => <Home data = {this.state.data}/>} />
          <Route path="/dos" component={() => <Dos data = {this.state.data.TextoDos}/>} />
          <Footer handelChangeIdioma={this.handelChangeIdioma} idioma={this.state.idioma} data = {this.state.data}/>
      </Router>
    );
  }
}

export default App;
