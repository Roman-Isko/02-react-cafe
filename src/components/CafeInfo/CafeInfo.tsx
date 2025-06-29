import styles from "./CafeInfo.module.css";

interface Props {
  title: string;
}

const CafeInfo = ({ title }: Props) => {
  return <h2 className={styles.title}>{title}</h2>;
};

export default CafeInfo;
