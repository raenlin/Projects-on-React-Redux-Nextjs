import './Main.css';
import { Link } from 'react-router-dom';

export default function Main() {
  return (
    <div className="form_link__wrapper">
      <Link to="/uncontrolled" className="form_link">
        Uncontrolled
      </Link>
      <Link to="/controlled" className="form_link">
        Controlled
      </Link>
    </div>
  );
}
