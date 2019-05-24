import React, { Component } from 'react'
import Izq from '../../components/SeccionIzqAreas';
import Esp from '../../lang/Esp.json'
import Eng from '../../lang/Eng.json'
const dataEsp = Esp
const dataEng = Eng
class Aduanas extends Component {
    state = {
        data: dataEsp
      }
    
      handelChangeIdioma = (e) => {
        const idioma = e.target.value
        this.setState({
          idioma: idioma,
          data: idioma === 'Esp' ? dataEsp : dataEng
        })
        // console.log(this.state.idioma)
        // console.log(this.state.data)
      }
    render() { 
        return ( 
            <div>
                <Izq data={this.state.data}/>
                {console.log(this.props.data)}
            </div>
         );
    }
}
 
export default Aduanas;