import styles from './CardDetail.module.css';
import { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';
import { useGetPlanetsQuery } from '../../store/planetsApi';
import { useRouter } from 'next/router';
import Page from '..';
import { fetchData } from '../../utils/api';
import { skipToken } from '@reduxjs/toolkit/query';

export const getServerSideProps = fetchData;

function CardDetails() {
  const router = useRouter();
  const { search, page, id } = router.query;
  const { theme } = useContext(ThemeContext);

  const planetData = useGetPlanetsQuery({ search: id as string } ?? skipToken);
  const data = planetData.currentData?.results;

  const handleClick = () => {
    router.push(`/?search=${search}&page=${page}`);
  };

  return (
    <div className={styles['card-details']}>
      {data &&
        data.map((item) => (
          <div key={item.name}>
            <h2>{item.name}</h2>
            <div>
              <p>Diameter: {item.diameter}</p>
              <p>Rotation-period: {item.rotation_period}</p>
              <p>Orbital-period: {item.orbital_period}</p>
              <p>Climate: {item.climate}</p>
              <p>Terrain: {item.terrain}</p>
              <p>Gravity: {item.gravity}</p>
              <p>Population: {item.population}</p>
              <p>Surface-water: {item.surface_water}</p>
              <p>Created: {item.created}</p>
            </div>
          </div>
        ))}
      <button
        onClick={handleClick}
        className={`${theme === 'light' ? styles['card-details-close__dark'] : styles['card-details-close']}`}
      >
        Close
      </button>
    </div>
  );
}

CardDetails.getLayout = function getLayout(CardDetails: ReactNode) {
  return <Page>{CardDetails}</Page>;
};

export default CardDetails;
