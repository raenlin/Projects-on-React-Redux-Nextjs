import { CardProp } from './Card.type';
import { Link } from 'react-router-dom';

function Card({ innerClassName, className, item }: CardProp) {
  const { name } = item;
  return (
    <li className={className}>
      <Link key={item.name} to={`/planets/${item.name}`}>
        <div className={innerClassName}>
          <h2>{name}</h2>
        </div>
      </Link>
    </li>
  );
}

export default Card;
