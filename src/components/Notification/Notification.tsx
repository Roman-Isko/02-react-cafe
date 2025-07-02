import styles from "./Notification.module.css";
import type { FC } from "react";

interface NotificationProps {
  message: string;
}

const Notification: FC<NotificationProps> = ({ message }) => {
  return <p className={styles.message}>{message}</p>;
};

export default Notification;
