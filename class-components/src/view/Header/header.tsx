import { HeaderProps } from './Header.type';
import { Link } from 'react-router-dom';

function Header({ name }: HeaderProps) {
  return (
    <header>
      <Link to="/">
        <h1>{name}</h1>
      </Link>
    </header>
  );
}

export default Header;
