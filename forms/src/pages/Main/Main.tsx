import './Main.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../state/store';
import Tile from '../../components/Tile/Tile';

export default function Main() {
  const uncontrolledForm = useSelector((state: RootState) => state.form.uncontrolled);
  const controlledForm = useSelector((state: RootState) => state.form.controlled);
  return (
    <>
      <div className="tiles-wrapper">
        <Tile props={uncontrolledForm} />
        <Tile props={controlledForm} />
      </div>
      <div className="form_link__wrapper">
        <Link to="/uncontrolled" className="form_link">
          Uncontrolled
        </Link>
        <Link to="/controlled" className="form_link">
          Controlled
        </Link>
      </div>
    </>
  );
}
