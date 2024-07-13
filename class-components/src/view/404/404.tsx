import { Link } from 'react-router-dom';

export function NotFound() {
  return (
    <div>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link to="/">Main</Link>
    </div>
  );
}
