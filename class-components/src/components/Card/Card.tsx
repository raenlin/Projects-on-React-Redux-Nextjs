import { useDispatch, useSelector } from 'react-redux';
import { CardProp } from './Card.type';
import { Link } from 'react-router-dom';
import { selectItem, unselectItem } from '../../store/selectedItemsSlice';
import { AppDispatch, RootState } from '../../store';

function Card({ innerClassName, className, item }: CardProp) {
  const dispatch = useDispatch<AppDispatch>();
  const selectedItems = useSelector((state: RootState) => state.selectedItems);
  const { name } = item;

  const handleCheckboxChange = (item: string) => {
    if (selectedItems.includes(item)) {
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
        checked={selectedItems.includes(item.name)}
        onChange={() => handleCheckboxChange(item.name)}
      />
      <li className={className}>
        <Link key={item.name} to={`/planets/${item.name}`}>
          <div className={innerClassName}>
            <h2>{name}</h2>
          </div>
        </Link>
      </li>
    </div>
  );
}

export default Card;
