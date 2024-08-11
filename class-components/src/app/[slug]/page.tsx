import styles from './CardDetail.module.css';
import { Planet, searchParamsType } from '../../utils/types';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Home from '../page';

async function CardDetails({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: searchParamsType;
}) {
  const res = await fetch(`https://swapi.dev/api/planets/?search=${params.slug}`, {
    cache: 'no-store',
  });
  if (!res.ok) {
    throw new Error('Something went wrong...');
  }
  const { results }: { results: Planet[] } = await res.json();

  if (!results.length) {
    notFound();
  }

  return (
    <Home searchParams={searchParams}>
      <div className={styles['card-details']}>
        {results &&
          results.map((item) => (
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
        <Link href={`/?search=&page=${searchParams.page}`}>
          <button className={styles['card-details-close']}>Close</button>
        </Link>
      </div>
    </Home>
  );
}

export default CardDetails;
