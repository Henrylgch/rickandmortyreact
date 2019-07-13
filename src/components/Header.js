import React from 'react'
import '../App.css';

import logo from '../images/logo.png'

class Header extends React.Component {
  render() {
    return (
      <div className="container-fluid d-flex align-items-center">
            <img className="img-fluid logo-navbar" src={logo} alt="Logo de Rick and Morty" />
          <div class="col d-flex justify-content-center">
            <form>
             <input type="text" placeholder="Encuentra tu personaje" />
            </form>
          </div>
        </div>
    )
  }
}

export default Header;