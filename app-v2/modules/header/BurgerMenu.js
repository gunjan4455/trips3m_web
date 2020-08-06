import React from 'react';
import Sidenav from 'modules/header/Sidenav';
import './Header.scss';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isChecked: false,
    };
    this.reRender = this.reRender.bind(this);
    this.checkBoxChanged = this.checkBoxChanged.bind(this);
  }
  checkBoxChanged(event) {
    this.setState({
      isChecked: event.target.checked,
    });
  }
  reRender() {
    this.setState({
      isChecked: !this.state.isChecked
    });
  }
  render() {
    return (
      <div className="burger-menu">
        <input type="checkbox" value="sidenav" checked={this.state.isChecked} onChange={this.checkBoxChanged} className="burger-menu-input" id="burgerMenu" />
        <label htmlFor="burgerMenu">
          <span className="sidenav-link at_sidenav" />
          <div className="sidenav-container">
            <Sidenav selectHandler={this.reRender} />
          </div>
          <div className="sidenav-blacklayer" />
        </label>
      </div>
    );
  }
}

export default BurgerMenu;
