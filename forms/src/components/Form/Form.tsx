import './Form.css';
import { FormProps } from './Form.type';

export default function Form({ handleChange, handleSubmit }: FormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name <input type="text" name="name" id="name" onChange={handleChange} />
      </label>
      <label htmlFor="age">
        Age <input type="text" name="age" onChange={handleChange} />
      </label>
      <label htmlFor="email">
        Email <input type="email" name="email" id="email" onChange={handleChange} />
      </label>
      <label htmlFor="password">
        Password <input type="password" name="password" id="password" onChange={handleChange} />
      </label>
      <label htmlFor="repeat-password">
        Repeat password <input type="password" name="repeat-password" id="repeat-password" />
      </label>
      <label htmlFor="male">
        Male
        <input type="radio" name="gender" id="male" value="male" onChange={handleChange} />
      </label>
      <label htmlFor="female">
        Female
        <input type="radio" name="gender" id="female" value="female" onChange={handleChange} />
      </label>
      <label htmlFor="accept-terms">
        <input type="checkbox" id="accept-terms" />
        accept Terms and Conditions
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
