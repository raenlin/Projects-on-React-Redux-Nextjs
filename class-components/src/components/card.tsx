import { Component } from 'react';

type CardProp = {
  innerClassName: string;
  className: string;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: string;
  created: string;
};

class Card extends Component<CardProp> {
  render() {
    return (
      <li className={this.props.className}>
        <div className={this.props.innerClassName}>
          <h2>{this.props.name}</h2>
          <div>
            <p>Diameter: {this.props.diameter}</p>
            <p>Rotation-period: {this.props.rotation_period}</p>
            <p>Orbital-period: {this.props.orbital_period}</p>
            <p>Climate: {this.props.climate}</p>
            <p>Terrain: {this.props.terrain}</p>
            <p>Gravity: {this.props.gravity}</p>
            <p>Population: {this.props.population}</p>
            <p>Surface-water: {this.props.surface_water}</p>
            <p>Created: {this.props.created}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Card;
