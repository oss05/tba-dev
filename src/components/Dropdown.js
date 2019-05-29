import React from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import IzqResponsive from './SeccionIzqEquipoResponsive'

export default class DropdownCustom extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>
          Equipo
        </DropdownToggle>
        <DropdownMenu>
            <IzqResponsive data={this.props.data}/>
        </DropdownMenu>
      </Dropdown>
    );
  }
}