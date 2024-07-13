import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Planet } from '../../utils/types';
import { fetchData } from '../../services/api';

function CardDetails() {
  const { id } = useParams<{ id: string }>();
  const [item, setItem] = useState<Planet | null>(null);

  useEffect(() => {
    const fetchItem = async () => {
      if (id) {
        const data = await fetchData(id);
        setItem(data.results);
      }
    };
    fetchItem();
  }, [id]);

  if (!item) {
    return;
  }

  return (
    <div className="card-details">
      <h2>{item.name}</h2>
    </div>
  );
}

export default CardDetails;
