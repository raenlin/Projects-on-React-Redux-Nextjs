import './Main.css';
import Card from '../../components/Card/Card';
import { MainProps } from './Main.type';

function Main({ items }: MainProps) {
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

export default Main;
