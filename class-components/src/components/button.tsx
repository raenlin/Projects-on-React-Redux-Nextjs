import { Component } from 'react';
import { ButtonProp } from './Button.type';

class Button extends Component<ButtonProp> {
  constructor(props: ButtonProp) {
    super(props);
  }
  handleClick = () => {
    this.props.onClick();
  };
  render() {
    return (
      <button className={this.props.className} onClick={this.handleClick}>
        {this.props.name}
      </button>
    );
  }
}

export default Button;
