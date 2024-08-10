'use client';

import styles from './main.module.css';
import Card from '../Card/Card';
import { MainProps } from './Main.type';
import { Pagination } from '../Pagination/pagination';
import { useState } from 'react';
import { Popup } from '../Popup/Popup';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

export default function Main({ items, pages }: MainProps) {
  const params = useSearchParams();
  const search = params.get('search');
  const page = params.get('page');

  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const selectedCards = useSelector((state: RootState) => state.cards.selectedCards);
  return (
    <section className={styles.main}>
      <div className={styles['main-list__wrapper']}>
        <ul className={styles['main-list']}>
          {items.map((item) => (
            <Link href={`/${item.name}?search=${search}&page=${page}`} key={item.name}>
              <Card
                key={item.name}
                className={styles['main-list__item']}
                innerClassName={styles['main-list__item-inner']}
                item={item}
                setIsPopupVisible={setIsPopupVisible}
              />
            </Link>
          ))}
        </ul>
      </div>
      <Pagination pages={pages} />
      {isPopupVisible && <Popup selectedCards={selectedCards} />}
    </section>
  );
}
