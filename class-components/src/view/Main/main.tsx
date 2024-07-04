import { Component } from 'react';
import './main.css';
import { Planet } from '../../utils/types';
import Card from '../../components/card';

type MainProps = {
  items: Planet[];
};

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
              name={item.name}
              innerClassName="main-list__item-inner"
              diameter={item.diameter}
              rotation_period={item.rotation_period}
              orbital_period={item.orbital_period}
              climate={item.climate}
              gravity={item.gravity}
              population={item.population}
              surface_water={item.surface_water}
              created={item.created}
              terrain={item.terrain}
            />
          ))}
        </ul>
      </section>
    );
  }
}

export default Main;
