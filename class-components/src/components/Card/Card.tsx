import { CardProp } from './Card.type';
import { Link } from 'react-router-dom';

function Card({ innerClassName, className, item }: CardProp) {
  const { name } = item;
  return (
    <li className={className}>
      <Link key={item.name} to={`/search/${item.name}`}>
        <div className={innerClassName}>
          <h2>{name}</h2>
          {/* <div>
            <p>Diameter: {diameter}</p>
            <p>Rotation-period: {rotation_period}</p>
            <p>Orbital-period: {orbital_period}</p>
            <p>Climate: {climate}</p>
            <p>Terrain: {terrain}</p>
            <p>Gravity: {gravity}</p>
            <p>Population: {population}</p>
            <p>Surface-water: {surface_water}</p>
            <p>Created: {created}</p>
          </div> */}
        </div>
      </Link>
    </li>
  );
}

export default Card;
