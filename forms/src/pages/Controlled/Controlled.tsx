import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';

export default function Controlled() {
  return (
    <div className="form_wrapper">
      <h2>Controlled form</h2>
      <Form />
      <div className="button_back">
        <Link to="/ ">Back to main</Link>
      </div>
    </div>
  );
}
