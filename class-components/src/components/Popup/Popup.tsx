import { useDispatch } from 'react-redux';
import './Popup.css';
import { PopupProps } from './Popup.type';
import { AppDispatch } from '../../store/store';
import { unselectItem } from '../../store/cardsSlice';
import { useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';

export function Popup({ selectedCards }: PopupProps) {
  const dispatch = useDispatch<AppDispatch>();
  const { theme } = useContext(ThemeContext);
  const unselectHandler = () => {
    selectedCards.forEach((card) => {
      dispatch(unselectItem(card));
    });
  };
  if (selectedCards.length) {
    return (
      <div className="popup">
        <h3>{selectedCards.length} items are selected:</h3>
        {selectedCards.map((card) => (
          <li key={card.name}>{card.name}</li>
        ))}
        <div className="popup-buttons">
          <button
            className={`${theme === 'light' ? 'popup-button popup-button__dark' : 'popup-button'}`}
            onClick={unselectHandler}
          >
            Unselect all
          </button>
          <button
            className={`${theme === 'light' ? 'popup-button popup-button__dark' : 'popup-button'}`}
          >
            Download
          </button>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
