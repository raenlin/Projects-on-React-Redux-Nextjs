import { Component } from 'react';

type ButtonProp = {
  className: string;
  onClick: () => void;
  name: string;
};

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
