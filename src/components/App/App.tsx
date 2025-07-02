import styles from "./App.module.css";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";

import { useState } from "react";
import type { VoteOption, VoteStats as IVoteStats } from "../../types/votes";

const App = () => {
  const [votes, setVotes] = useState<IVoteStats>({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const handleVote = (option: VoteOption) => {
    setVotes((prev) => ({ ...prev, [option]: prev[option] + 1 }));
  };

  const resetVotes = () => {
    setVotes({ good: 0, neutral: 0, bad: 0 });
  };

  const total = votes.good + votes.neutral + votes.bad;

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
        <VoteStats votes={votes} />
      )}
    </div>
  );
};

export default App;
