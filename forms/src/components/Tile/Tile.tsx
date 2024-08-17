import './Tile.css';
import { TileProp } from './Tile.type';

export default function Tile({ props }: TileProp) {
  const { name, age, email, password, country, gender } = props;
  return (
    <div className="tile-wrapper">
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Country: {country}</p>
      <p>Gender: {gender}</p>
    </div>
  );
}
