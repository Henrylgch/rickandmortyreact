import React from 'react'
import '../App.css';

import logo from '../images/logo.png'

class Header extends React.Component {
  state = {
    value: ''
  }
  
  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
    this.searchCharacter(e.target.value)
  }

  searchCharacter = async () => {
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${this.state.value}`)
      const dataIn = await response.json()
  
      this.setState({
        loading: false,
        data: {
          info: dataIn.info,
          results: dataIn.results
        },
      })
    } catch(error) {
        this.setState({
          loading: false,
          error: error
        })
      }
  }  

  

render() {
return (
<div className="container-fluid d-flex align-items-center">
  <img className="img-fluid logo-navbar" src={logo} alt="Logo de Rick and Morty" />
  <div className="col d-flex justify-content-center">
    <form>
      <input onChange={this.handleChange} className="form-control search-input" type="text" placeholder="Encuentra tu personaje" value={this.state.value} />
    </form>
  </div>
</div>
)
}
}

export default Header;