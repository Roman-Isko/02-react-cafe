import styles from "./VoteStats.module.css";

interface Props {
  good: number;
  neutral: number;
  bad: number;
  total: number;
  positivePercentage: number;
}

const VoteStats = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}: Props) => {
  return (
    <div className={styles.stats}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};

export default VoteStats;
