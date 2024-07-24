import { useDispatch, useSelector } from 'react-redux';
import { CardProp } from './Card.type';
import { Link, useLocation } from 'react-router-dom';
import { selectItem, unselectItem } from '../../store/cardsSlice';
import { AppDispatch, RootState } from '../../store/store';
import { Planet } from '../../utils/types';

function Card({ innerClassName, className, item }: CardProp) {
  const dispatch = useDispatch<AppDispatch>();
  const selectedCards = useSelector((state: RootState) => state.cards.selectedCards);
  const { name } = item;
  const location = useLocation();
  const isSelected = selectedCards.some((selectedCard) => selectedCard.name === item.name);

  const handleCheckboxChange = (item: Planet) => {
    if (isSelected) {
      dispatch(unselectItem(item));
    } else {
      dispatch(selectItem(item));
    }
  };

  return (
    <div className="card" key={item.name}>
      <input
        className="card-checkbox"
        type="checkbox"
        checked={isSelected}
        onChange={() => handleCheckboxChange(item)}
      />
      <li className={className}>
        <Link key={item.name} to={`/planets/${item.name}/${location.search}`}>
          <div className={innerClassName}>
            <h2>{name}</h2>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default Card;
