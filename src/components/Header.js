import React from 'react'
import '../App.css';

import logo from '../images/logo.png'

class Header extends React.Component {
  render() {
    return (
      <div className="container-navbar">
          <div>
            <img className="img-fluid logo-navbar" src={logo} alt="Logo de Rick and Morty" />
          </div>
          <div>
            <form>
             <input type="text" placeholder="Encuentra tu personaje" />
            </form>
          </div>
        </div>
    )
  }
}

export default Header;