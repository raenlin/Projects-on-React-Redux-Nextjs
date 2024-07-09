import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      404 not found
      <Link to="/">Main</Link>
    </div>
  );
}
