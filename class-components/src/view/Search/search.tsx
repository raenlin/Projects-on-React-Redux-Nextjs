import './search.css';
import { Component } from 'react';
import { ChangeEvent } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';

type InputProp = {
  input: string;
};

type SearchProp = {
  onSearch: (input: string) => void;
};

class Search extends Component<SearchProp, InputProp> {
  constructor(props: SearchProp) {
    super(props);
    this.state = {
      input: '',
    };
  }

  handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: event.target.value });
  };

  handleClick = () => {
    const { input }: Record<string, string> = this.state;
    this.props.onSearch(input.trim());
  };

  render() {
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
          {/* <Button
            className="search-inner__button-error"
            onClick={this.handleErrorClick}
            name="Error"
          /> */}
        </div>
      </section>
    );
  }
}

export default Search;
