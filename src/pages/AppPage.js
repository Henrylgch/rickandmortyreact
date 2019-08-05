import React from 'react';
import {Link} from 'react-router-dom';
import '../styles/global.css';
import '../styles/Characters.css';
import '../styles/Header.css'


import logo from '../images/logo.png'


import Loader from '../components/Loader'
// import Header from './components/Header'
import FilterList from '../components/FilterList'
import CharactersList from '../components/CharactersList'

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
  }

  comp

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
      this.setState({error: error, loading: false})
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
    }catch (error) {
      this.setState({loading: false, error: error})
    }
  }

  searchCharacter = async (query) => {
    this.setState({
      loading: true,
      error: null
    })

    try {
      const response = await fetch(`https://rickandmortyapi.com/api/character/?name=${query}`)
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
          error: error,
          data: []
        })
      }
  }  

  render() {
    return (
      <div className="AppPage__body container-fluid">
        <div className="container Header__container">
          <Link to="/">
            <img className="img-fluid logo-navbar" src={logo} alt="Logo de Rick and Morty" />
          </Link>
          <form className="search-form">
            <input 
              onChange={(e) => {
                this.setState({value: e.target.value}) 
                return this.searchCharacter(e.target.value)
              }}
              value={this.state.value} 
              className="search-input" 
              type="text" 
              placeholder="Encuentra tu personaje" 
              />
          </form>
        </div>

        <div className="container-fluid d-flex">
          <FilterList eventStatus={this.getStatus} eventGender={this.getGender} />

          <div className="col">
              {this.state.loading && (
                <Loader />
              )}
             <CharactersList 
              data={this.state.data} 
              loading={this.state.loading}
              onClick={() => this.loadMore(this.state.data.info.next)}
              />
          </div>
        </div>
      </div>
    )
  }
}

export default Aplication;
