import React from 'react';
import './App.css';
import './styles/Characters.css'

import logo from './images/logo.png'
import Character from './components/Character'

class App extends React.Component {
  state = {
    data: {
      info: [],
      results: []
    }
  }

  componentDidMount() {
    this.fetchCaracter()
  }

  fetchCaracter = async () => {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const dataIn = await response.json();

    this.setState({
      data: dataIn
    })
  }

  render() {
    return (
      <div className="container-fluid">
        <header className="container-navbar">
          <div>
            <img className="img-fluid logo-navbar" src={logo} alt="Logo de Rick and Morty" />
          </div>
          <div>
            <form>
             <input type="text" placeholder="Encuentra tu personaje" />
            </form>
          </div>
        </header>

        <div className="row">
          <div className="col-2">
          </div>
          <div className="col" >
            <ul className="row list-uninstyled">
              {this.state.data.results.map(character => (
                <li className="col-6 col-md-6" key={character.id}>
                  <Character 
                    image={character.image} 
                    name={character.name}  
                    status={character.status}
                    species={character.species}
                    gender={character.gender}
                    origin={character.origin.name}
                    />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
