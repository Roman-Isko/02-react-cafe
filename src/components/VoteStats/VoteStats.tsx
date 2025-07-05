import css from "./VoteStats.module.css";
import type { Votes } from "../../types/votes";

interface VoteStatsProps {
  votes: Votes;
  totalVotes: number;
  positiveRate: number;
}

const VoteStats = ({ votes, totalVotes, positiveRate }: VoteStatsProps) => {
  return (
    <div className={css.container}>
      <ul className={css.list}>
        <li className={css.item}>Good: {votes.good}</li>
        <li className={css.item}>Neutral: {votes.neutral}</li>
        <li className={css.item}>Bad: {votes.bad}</li>
        <li className={css.item}>Total: {totalVotes}</li>
        <li className={css.item}>Positive: {positiveRate.toFixed(0)}%</li>
      </ul>
    </div>
  );
};

export default VoteStats;
