import styles from "./Notification.module.css";

interface Props {
  message: string;
}

const Notification = ({ message }: Props) => {
  return <p className={styles.message}>{message}</p>;
};

export default Notification;
