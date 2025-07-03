import styles from "./App.module.css";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";

import { useState } from "react";
import type { VoteType, Votes } from "../../types/votes";

const App = () => {
  const [votes, setVotes] = useState<Votes>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (type: VoteType) => {
    setVotes((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  const total = votes.good + votes.neutral + votes.bad;
  const positiveRate =
    total > 0 ? `${Math.round((votes.good / total) * 100)}%` : "0%";

  return (
    <div className={styles.container}>
      <CafeInfo />
      <VoteOptions
        onVote={handleVote}
        onReset={resetVotes}
        canReset={total > 0}
      />
      {total === 0 ? (
        <Notification message="No feedback given" />
      ) : (
        <VoteStats
          votes={votes}
          totalVotes={total}
          positiveRate={positiveRate}
        />
      )}
    </div>
  );
};

export default App;
