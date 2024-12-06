import { Component, ChangeEvent } from 'react';
import { InputProps } from './Input.type';

class Input extends Component<InputProps> {
  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.props.onChange(event);
  };

  render() {
    return (
      <input
        value={this.props.value}
        type={this.props.type}
        className={this.props.className}
        placeholder={this.props.placeholder}
        onChange={this.handleChange}
      />
    );
  }
}

export default Input;
