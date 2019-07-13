import React from 'react'
import '../App.css';

import logo from '../images/logo.png'

class Header extends React.Component {
state = {
  value: '',
  nextPage: 1,
  loading: true,
  error: null,
  data: {
    info: [],
    results: []
  }
}

handleChange = (e) => {
  console.log({
    value: e.target.value
  });
}

search = async () => {
  try {
    const response = fetch(`https://rickandmortyapi.com/api/character/?name=${this.state.value}`)
    const dataIn = response.json()

    this.setState({
      loading: false,
      data: {
        info: dataIn.info,
        results: [].concat(this.state.data.results, dataIn.results)
      },
      nextPage: this.state.nextPage + 1
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
      <input onChange={this.handleChange} className="form-control search-input" type="text" placeholder="Encuentra tu personaje" value={this.props.value} />
    </form>
  </div>
</div>
)
}
}

export default Header;