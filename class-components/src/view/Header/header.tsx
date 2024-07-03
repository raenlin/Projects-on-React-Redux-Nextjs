import './header.css';
import { Component } from 'react';

type Props = {
  name: string;
};

class Header extends Component<Props> {
  render() {
    return (
      <header>
        <h1>{this.props.name}</h1>
      </header>
    );
  }
}

export default Header;
