import './Main.css';
import { Component } from 'react';
import Card from '../../components/Card/Card';
import { MainProps } from './Main.type';

class Main extends Component<MainProps> {
  constructor(props: MainProps) {
    super(props);
  }
  render() {
    const { items } = this.props;

    return (
      <section className="main">
        <ul className="main-list">
          {items.map((item) => (
            <Card
              key={item.name}
              className="main-list__item"
              innerClassName="main-list__item-inner"
              item={item}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Main;
