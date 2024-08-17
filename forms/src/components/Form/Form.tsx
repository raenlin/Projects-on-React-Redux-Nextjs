import './Form.css';
import { FormProps } from './Form.type';

export default function Form({ register, handleSubmit, errors }: FormProps) {
  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">
        Name <input type="text" id="name" placeholder="Name..." {...register('name')} />
      </label>
      <p>{errors.name?.message}</p>
      <label htmlFor="age">
        Age <input type="number" id="age" placeholder="18" {...register('age')} />
      </label>
      <p>{errors.age?.message}</p>
      <label htmlFor="email">
        Email <input type="text" id="email" placeholder="email@gmail.com" {...register('email')} />
      </label>
      <p>{errors.email?.message}</p>
      <label htmlFor="password">
        Password{' '}
        <input type="text" id="password" placeholder="Password123!" {...register('password')} />
      </label>
      <p>{errors.password?.message}</p>
      <label htmlFor="repeat-password">
        Confirm password{' '}
        <input
          type="text"
          placeholder="Password123!"
          id="repeat-password"
          {...register('confirm_password')}
        />
      </label>
      <p>{errors.confirm_password?.message}</p>
      <label htmlFor="male">
        Male
        <input type="radio" id="male" value="male" {...register('gender')} />
      </label>
      <label htmlFor="female">
        Female
        <input type="radio" id="female" value="female" {...register('gender')} />
      </label>
      <p>{errors.gender?.message}</p>
      <label htmlFor="accept-terms">
        <input type="checkbox" id="accept-terms" {...register('acceptTermsAndConditions')} />
        accept Terms and Conditions
      </label>
      <p>{errors.acceptTermsAndConditions?.message}</p>
      <button>Submit</button>
    </form>
  );
}
