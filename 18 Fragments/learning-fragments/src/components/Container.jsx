import styles from "./Container.module.css";

const Container = ({ Children }) => {
  return <div classNameNameName={styles.container}>{Children}</div>;
};

export default Container;
