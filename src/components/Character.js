import React from 'react';
import '../styles/Characters.css'

class Character extends React.Component {
  render() {
    return (
      <div className="Characters__container">
        <h6 className="Characters__title"> {this.props.name}</h6>
          <img src={this.props.image} className="Characters__avatar" />
        <div className="Characters__info">
          <div className="Characters__subtitle"> <span className="bold" >Estado: </span>{this.props.status}</div>
          <div className="Characters__subtitle"> <span className="bold" >Especie: </span>{this.props.species}</div>
          <div className="Characters__subtitle"> <span className="bold" >Genero: </span>{this.props.gender}</div>
          <div className="Characters__subtitle"> <span className="bold" >Origen: </span>{this.props.origin}</div>
        </div>
      </div>
    )
  }
}

export default Character