import './main.css';
import Card from '../../components/Card/Card';
import { MainProps } from './Main.type';
import { Pagination } from '../../components/Pagination/pagination';
import { Outlet, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { Popup } from '../../components/Popup/Popup';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';

function Main({ items, pages, setquery, query }: MainProps) {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const selectedCards = useSelector((state: RootState) => state.cards.selectedCards);
  const location = useLocation();
  return (
    <section className="main">
      <div className="main-list__wrapper">
        <ul className="main-list">
          {items.map((item) => (
            <Card
              key={item.name}
              className="main-list__item "
              innerClassName="main-list__item-inner"
              item={item}
              setIsPopupVisible={setIsPopupVisible}
            />
          ))}
        </ul>
        <Outlet />
      </div>
      {location.pathname === '/' && <Pagination pages={pages} setquery={setquery} query={query} />}
      {isPopupVisible && <Popup selectedCards={selectedCards} />}
    </section>
  );
}

export default Main;
