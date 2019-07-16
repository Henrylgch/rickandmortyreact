import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/global.css';
import '../styles/Characters.css';
import '../styles/Header.css'


import logo from '../images/logo.png'


import Loader from '../components/Loader'
// import Header from './components/Header'
import FilterList from '../components/FilterList'
import Character from '../components/Character'

class Aplication extends React.Component {
  state = {
    value: '',
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
    this.setState({
      loading: true, 
      error: null,
      data: {
        info: [],
        results: []
      }
    })
    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?gender=${filter}`)
      const dataIn = await response.json()
      
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
          info: dataIn.info,
          results: [].concat(this.state.data.results, dataIn.results)
        }
      })
      console.log(dataIn)
    }catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
   this.searchCharacter(e.target.value)
  }

  searchCharacter = async () => {
    this.setState({
      loading: true,
      error: null
    })

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${this.state.value}`)
      const dataIn = await response.json()


      if (dataIn.results === undefined) {
        dataIn.results = [
          {name: 'No encontrado'}
        ]
      } else {

        this.setState({
          loading: false,
          data: {
            info: dataIn.info,
            results: dataIn.results
          },
          nextPage: this.state.nextPage + 1
        })
      }
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
      <div className="AppPage__body container-fluid">
        <div className="container Header__container">
          <Link to="/">
            <img className="img-fluid logo-navbar" src={logo} alt="Logo de Rick and Morty" />
          </Link>
          <form className="search-form">
            <input onChange={this.handleChange} className="search-input" type="text" placeholder="Encuentra tu personaje" value={this.state.value} />
          </form>
        </div>

        <div className="container-fluid d-flex">
          <FilterList eventStatus={this.getStatus} eventGender={this.getGender} />

          <div>
            <ul className="row list-uninstyled">
              {this.state.data.results.map(character => (
                <li className="col-md-4" key={character.id}>
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
                  <Loader />
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

export default Aplication;
