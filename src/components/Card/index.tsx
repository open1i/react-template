import styles from './styles.module.css';

interface CardProps {
  title: string;
  count: number;
  onIncrement: () => void;
}

export const Card = ({ title, count, onIncrement }: CardProps) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.content}>
        <span className={styles.count}>{count}</span>
        <button className={styles.button} onClick={onIncrement}>
          增加
        </button>
      </div>
    </div>
  );
};
