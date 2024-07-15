import './CardDetail.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Planet } from '../../utils/types';
import { fetchData } from '../../services/api';

function CardDetails() {
  const { id } = useParams<{ id: string }>();
  const [items, setItems] = useState<Planet[]>([]);
  const [error, setError] = useState<Error | null>(null);
  const [fetching, setFetching] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/');
  };

  useEffect(() => {
    const fetchItem = async () => {
      if (id) {
        try {
          setFetching(true);
          const data = await fetchData(id);
          setItems(data);
          setError(null);
        } catch (error) {
          setItems([]);
          setError(error as Error);
        } finally {
          setFetching(false);
        }
      }
    };
    fetchItem();
  }, [id]);

  if (!items) {
    return;
  }

  if (error) {
    return <p>Error {error.message}</p>;
  }

  return (
    <>
      {fetching ? (
        <div className="loader"></div>
      ) : (
        <div className="card-details">
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
          <button onClick={handleClick} className="card-details-close">
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default CardDetails;
