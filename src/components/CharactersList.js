import React from 'react';
import '../styles/Characters.css'

function CharactersList(props) {
    const characters = props.data.results

    if (!characters) {
      return <h3 className="Characters__search-error">No se encontraron resultados</h3>
    }

    return (
      <ul className="list-unstyled row">
        {characters.map(character => {
          return (
            <li key={character.id} className="Characters__container">
                <h1 className="Characters__title" >{character.name}</h1>
              <img src={character.image} className="Characters__avatar" alt={`avatar de ${character.name}`} />
              <div className="Characters__info">
                <p className="Characters__subtitle"> <span className="bold">Gender: </span>{character.gender} </p>
                <p className="Characters__subtitle"> <span className="bold">Status: </span>{character.status} </p>
                <p className="Characters__subtitle"> <span className="bold">Specie: </span>{character.species} </p>
                <p className="Characters__subtitle"> <span className="bold">Origen: </span>{character.origin.name} </p>
              </div>
            </li>
          )
        })}

        {props.loading === false && props.data.info.next !== '' && (
          <div className="container"> 
            <button onClick={props.onClick} type="button" className="btn btn-info btn-lg btn-block">Cargar mas personajes</button>
          </div>
        )}
      </ul>
      
    )
}

export default CharactersList