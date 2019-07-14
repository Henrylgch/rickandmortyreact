import React from 'react';
import './App.css';
import './styles/Characters.css'

import Loader from './components/Loader'
import Header from './components/Header'
import FilterList from './components/FilterList'
import Character from './components/Character'

class App extends React.Component {
  state = {
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
      const response = await fetch(`https://rickandmortyapi.com/api/character/`);
      const dataIn = await response.json();
  
      this.setState({
        loading: false,
        data: {
          info: dataIn.info,
          results: [].concat(this.state.data.results, dataIn.results)
        },
      })
    } catch(error) {
      this.setState({
        loading: false,
        error: error
      })
    }
  }

  getStatus = async (filter) => {
    this.setState({
      loading: true, 
      error: null,
      data: {
        info: [],
        results: []
      }
    })
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?status=${filter}`)
      const dataIn = await response.json()
      console.log(dataIn)

      this.setState({
        loading: false,
        data: {
          info: dataIn.info,
          results: [].concat(this.state.data.results, dataIn.results),
          nextPage: this.nextPage + 1
        }
      })
    } catch (error) {
      this.setState({
        loading: false,
        error: error
      })
    }
    console.log(filter);
  }

  getGender = async (filter) => {
    console.log(filter);
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?gender=${filter}`)
      const dataIn = await response.json()
      console.log(dataIn)  
      
      this.setState({
        loading: false,
        data: {
          info: {},
          results: dataIn.results
        }
      })
    } catch (error) {
      
    }
  }

  loadMore = async (url) => {
    this.setState({
      loading: true,
      error: null
    })

    try {
      const response = await fetch(url)
      const dataIn = await response.json()
      
      this.setState({
        loading: false,
        error: null,
        data: {
          info: {},
          results: [].concat(this.state.data.results, dataIn.results)
        }
      })
      console.log(dataIn)
    }catch (error) {
      this.setState({loading: false, error: error})
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
            <FilterList eventStatus={this.getStatus} eventGender={this.getGender} />
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
                  <button onClick={() => this.loadMore(this.state.data.info.next)} type="button" className="btn btn-info btn-lg btn-block">Cargar mas personajes</button>
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
