import { Link } from 'react-router-dom';
import Form from '../../components/Form/Form';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../state/store';
import { useState } from 'react';
import { submitControlled } from '../../state/formSlice';

export default function Controlled() {
  const dispatch = useDispatch<AppDispatch>();
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    password: '',
    gender: '',
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(submitControlled(formData));
  };
  return (
    <div className="form_wrapper">
      <h2>Controlled form</h2>
      <Form handleChange={handleChange} handleSubmit={handleSubmit} />
      <div className="button_back">
        <Link to="/ ">Back to main</Link>
      </div>
    </div>
  );
}
