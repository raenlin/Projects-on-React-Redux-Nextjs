import './Form.css';

export default function Form() {
  return (
    <form>
      <label htmlFor="name">
        Name <input type="text" name="name" id="name" />
      </label>
      <label htmlFor="age">
        Age <input type="text" name="age" />
      </label>
      <label htmlFor="email">
        Email <input type="email" name="email" id="email" />
      </label>
      <label htmlFor="password">
        Password <input type="password" name="password" id="password" />
      </label>
      <label htmlFor="repeat-password">
        Password <input type="password" name="repeat-password" id="repeat-password" />
      </label>
      <label htmlFor="male">
        Male
        <input type="radio" name="gender" id="male" />
      </label>
      <label htmlFor="female">
        Female
        <input type="radio" name="gender" id="female" />
      </label>
      <label htmlFor="accept-terms">
        <input type="checkbox" id="accept-terms" />
        Accept Terms and Conditions
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
