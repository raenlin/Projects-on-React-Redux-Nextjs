import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CardProp } from './Card.type';
import { selectItem, unselectItem } from '../../store/cardsSlice';
import { AppDispatch, RootState } from '../../store/store';
import { Planet } from '../../utils/types';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function Card({ innerClassName, className, item, setIsPopupVisible }: CardProp) {
  const params = useSearchParams();
  const search = params.get('search');
  const page = params.get('page');
  const dispatch = useDispatch<AppDispatch>();
  const selectedCards = useSelector((state: RootState) => state.cards.selectedCards);
  const { name } = item;
  const isSelected = selectedCards.some((selectedCard) => selectedCard.name === item.name);

  const handleCheckboxChange = (item: Planet) => {
    if (isSelected) {
      dispatch(unselectItem(item));
    } else {
      dispatch(selectItem(item));
    }
    setTimeout(() => {
      setIsPopupVisible(true);
    }, 500);
  };

  return (
    <div className={styles.card} key={item.name}>
      <input
        className={styles['card-checkbox']}
        type="checkbox"
        checked={isSelected}
        onChange={() => handleCheckboxChange(item)}
      />
      <Link href={`/${item.name}?search=${search}&page=${page}`} key={item.name}>
        <li className={className}>
          <div className={innerClassName}>
            <h2>{name}</h2>
          </div>
        </li>
      </Link>
    </div>
  );
}

export default Card;
