import styles from "./App.module.css";
import VoteOptions from "../VoteOptions/VoteOptions";
import VoteStats from "../VoteStats/VoteStats";
import CafeInfo from "../CafeInfo/CafeInfo";
import Notification from "../Notification/Notification";

const App = () => {
  return (
    <div className={styles.container}>
      <CafeInfo />
      <VoteOptions />
      <VoteStats />
      <Notification message="No feedback given" />
    </div>
  );
};

export default App;
