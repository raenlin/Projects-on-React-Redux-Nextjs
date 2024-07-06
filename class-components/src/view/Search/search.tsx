import './Search.css';
import { Component } from 'react';
import { ChangeEvent } from 'react';
import Button from '../../components/Button/Button';
import Input from '../../components/Input/Input';
import { InputProp, SearchProp } from './Search.type';

class Search extends Component<SearchProp, InputProp> {
  constructor(props: SearchProp) {
    super(props);
    this.state = {
      input: '',
      isError: false,
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: event.target.value });
  };

  handleClick = () => {
    const { input } = this.state;
    this.props.onSearch(input.trim());
    this.setState({ input: '' });
  };

  handleError = () => this.setState({ isError: true });

  render() {
    const { isError } = this.state;
    if (isError) {
      throw new Error('I crashed!');
    } else {
      return (
        <section className="search">
          <div className="search-inner">
            <Input
              value={this.state.input}
              type="text"
              className="search-inner__input"
              placeholder="Type planet to search..."
              onChange={this.handleChange}
            />
            <Button className="search-inner__button" onClick={this.handleClick} name="Search" />
            <button className="search-inner__button-error" onClick={this.handleError}>
              Error!
            </button>
          </div>
        </section>
      );
    }
  }
}

export default Search;
