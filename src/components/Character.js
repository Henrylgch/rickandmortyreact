import React from 'react';
import '../styles/Characters.css'

class Character extends React.Component {
  render() {
    return (
      <div className="Characters__container">
        <div className="Characters__avatar-container">
          <img src={this.props.image} className="img-fluid Characters__avatar" />
        </div>
        <div className="container-fluid">
          <h6 className="Characters__title"> {this.props.name}</h6>
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