import styles from './CardDetail.module.css';
import { ReactNode, useContext } from 'react';
import { ThemeContext } from '../../contexts/theme';
import { Planet } from '../../utils/types';
import { useGetPlanetsQuery } from '../../store/planetsApi';
import { useRouter } from 'next/router';

function CardDetails() {
  const router = useRouter();
  const id = router.query.CardDetail as string;
  const { theme } = useContext(ThemeContext);

  const { data } = useGetPlanetsQuery({ search: id ? id : '' });
  const items: Planet[] = data ? data.results : [];

  const handleClick = () => {
    router.push(`/?search=&page=1`);
  };

  return (
    <div className={styles['card-details']}>
      {items.map((item) => (
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
  return <div>{CardDetails}</div>;
};

export default CardDetails;
