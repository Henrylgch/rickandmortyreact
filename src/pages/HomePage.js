import React from 'react'
import {Link} from 'react-router-dom'

import '../styles/global.css'
import '../styles/HomePage.css'

import logo from '../images/logo.png'

class HomePage extends React.Component {
render() {
return(
  <div className="HomePage__container">
    <h1 className="font-type1 HomePage__title">
      Bienvenido al mundo
    </h1>
    <h1 className="font-type1">De</h1>
    <img src={logo} alt="Rick and Morty" />
    <Link className="HomePage__btn" to="/app">Mira los personajes</Link>
  </div>
)
}
}

export default HomePage;