import React from 'react';
import './App.css';
import './styles/Characters.css'

import Loader from './components/Loader'
import Header from './components/Header'
import Character from './components/Character'

class App extends React.Component {
  state = {
    nextPage: 1,
    loading: true,
    error: null,
    data: {
      info: [],
      results: []
    }
  }

  componentDidMount() {
    this.fetchCaracter()
  }

  fetchCaracter = async () => {
    this.setState({loading:true, error: null})

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character?page=${this.state.nextPage}`);
      const dataIn = await response.json();
  
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
    if (this.state.error) {
      return `Error: ${this.state.error.message}`;
    }
    return (
      <div className="container-fluid">
        <Header />

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
              {this.state.loading && (
                <div className="container">
                  <Loader />
                </div>
                )}

              {!this.state.loading && (
                <div className="container"> 
                  <button onClick={() => this.fetchCaracter()} type="button" className="btn btn-info btn-lg btn-block">Cargar mas personajes</button>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
