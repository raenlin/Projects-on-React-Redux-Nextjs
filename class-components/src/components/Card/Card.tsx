import styles from './Card.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { CardProp } from './Card.type';
import { selectItem, unselectItem } from '../../store/cardsSlice';
import { AppDispatch, RootState } from '../../store/store';
import { Planet } from '../../utils/types';
import { useRouter } from 'next/router';

function Card({ innerClassName, className, item, setIsPopupVisible }: CardProp) {
  const id = item.name;
  const router = useRouter();
  const { asPath } = useRouter();
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
      <li className={className} onClick={() => router.push(`/${id}${asPath}`)}>
        <div className={innerClassName}>
          <h2>{name}</h2>
        </div>
      </li>
    </div>
  );
}

export default Card;
