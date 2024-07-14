import { HeaderProps } from './Header.type';

function Header({ name }: HeaderProps) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;
