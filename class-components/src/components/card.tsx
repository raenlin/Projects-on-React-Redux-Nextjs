import { Component } from 'react';
import { CardProp } from './Card.type';

class Card extends Component<CardProp> {
  render() {
    const { innerClassName, className, item } = this.props;
    const {
      name,
      diameter,
      rotation_period,
      orbital_period,
      climate,
      gravity,
      population,
      surface_water,
      created,
      terrain,
    } = item;
    return (
      <li className={className}>
        <div className={innerClassName}>
          <h2>{name}</h2>
          <div>
            <p>Diameter: {diameter}</p>
            <p>Rotation-period: {rotation_period}</p>
            <p>Orbital-period: {orbital_period}</p>
            <p>Climate: {climate}</p>
            <p>Terrain: {terrain}</p>
            <p>Gravity: {gravity}</p>
            <p>Population: {population}</p>
            <p>Surface-water: {surface_water}</p>
            <p>Created: {created}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default Card;
