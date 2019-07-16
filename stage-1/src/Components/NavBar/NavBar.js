import React, { Component } from 'react';
import './NavBar.css';
import Logo from './dev-mountain-logo.png'

class NavBar extends Component {
  render() {
    return (
      <div>
        <div className="navbar-container">
          <div className="logo-container">
            <img src={Logo} className="logo-image" alt="" />
          </div>

          <div className="navbar-links-container">
            <ul className="navbar-links">
              <li onClick={() => this.props.navigate('store')}>THIS IS MY HOUSE!</li>
              <li onClick={() => this.props.navigate('cart')}>Shopping Cart</li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default NavBar;