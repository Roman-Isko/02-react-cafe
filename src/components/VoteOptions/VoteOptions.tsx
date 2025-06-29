import styles from "./VoteOptions.module.css";
import { VoteType } from "../../types/votes";

interface Props {
  options: VoteType[];
  onLeaveVote: (type: VoteType) => void;
}

const VoteOptions = ({ options, onLeaveVote }: Props) => {
  return (
    <div className={styles.wrapper}>
      {options.map((option) => (
        <button
          key={option}
          onClick={() => onLeaveVote(option)}
          className={styles.button}
        >
          {option}
        </button>
      ))}
    </div>
  );
};

export default VoteOptions;
