import './App.css';
import { Component } from 'react';
import Header from './view/Header/Header';
import Search from './view/Search/Search';
import Main from './view/Main/Main';
import { fetchData } from './services/api';
import ErrorBoundary from './components/Errorboundary';
import Footer from './view/Footer/Footer';
import { AppProps, SearchProps } from './App.type';

class App extends Component<AppProps, SearchProps> {
  constructor(props: AppProps) {
    super(props);
    this.state = {
      searchInput: '',
      items: [],
      error: null,
      isFetching: false,
    };
  }

  componentDidMount() {
    const savedSearch = localStorage.getItem('searchPlanet');
    if (savedSearch) {
      this.handleFetchData(savedSearch);
    } else {
      this.handleFetchData('');
    }
  }

  handleFetchData = async (searchInput: string) => {
    try {
      this.setState({ isFetching: true });
      const items = await fetchData(searchInput);
      this.setState({
        searchInput: searchInput.trim(),
        items,
        error: null,
      });
      localStorage.setItem('searchPlanet', searchInput.trim());
    } catch (error) {
      this.setState({
        searchInput: '',
        items: [],
        error: error instanceof Error ? error : new Error('Unknown error'),
      });
    } finally {
      this.setState({ isFetching: false });
    }
  };

  render() {
    const { error, isFetching } = this.state;
    if (error) {
      return <p>Error {error.message}</p>;
    }

    return (
      <ErrorBoundary>
        <Header name="Star Wars Planets" />
        <Search onSearch={this.handleFetchData} />
        {isFetching ? (
          <div className="loader"></div>
        ) : (
          <>
            <Main items={this.state.items} />
            <Footer />
          </>
        )}
      </ErrorBoundary>
    );
  }
}

export default App;
