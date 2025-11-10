import styles from './card.module.scss';

interface MenuItem {
  index: number;
  label: string;
  path: string;
  src: string;
}
interface CardProps {
  items: MenuItem[];
}

function Card({ items }: CardProps) {
  return (
    <div className={styles.cardContainer}>
      {items.map((item) => ( 
        <div className={styles.card} key={item.index}>
          <img
            src={`http://127.0.0.1:8000${item.src}`}
            alt={item.label}
            className={styles.card__img}
          />
          <p className={styles.card__label}>{item.label}</p>
        </div>
      ))}
    </div>
  );
}

export default Card;