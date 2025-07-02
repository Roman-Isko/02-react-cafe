import styles from "./VoteStats.module.css";
import type { VoteStats as IVoteStats } from "../../types/votes";

interface VoteStatsProps {
  votes: IVoteStats;
}

const VoteStats = ({ votes }: VoteStatsProps) => {
  const total = votes.good + votes.neutral + votes.bad;
  const positivePercentage =
    total > 0 ? Math.round((votes.good / total) * 100) : 0;

  return (
    <ul className={styles.stats}>
      <li>
        Good: <span>{votes.good}</span>
      </li>
      <li>
        Neutral: <span>{votes.neutral}</span>
      </li>
      <li>
        Bad: <span>{votes.bad}</span>
      </li>
      <li>
        Total: <span>{total}</span>
      </li>
      <li>
        Positive: <span>{positivePercentage}%</span>
      </li>
    </ul>
  );
};

export default VoteStats;
