import { Component } from 'react';
import { HeaderProps } from './Header.type';

class Header extends Component<HeaderProps> {
  render() {
    return (
      <header>
        <h1>{this.props.name}</h1>
      </header>
    );
  }
}

export default Header;
