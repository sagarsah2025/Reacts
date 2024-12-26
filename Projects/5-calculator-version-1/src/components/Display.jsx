import styles from "./Display.module.css";

const Display = ({ displayValue }) => {
  return (
    <input
      classNameNameName={styles.display}
      type="text"
      value={displayValue}
      readOnly
    />
  );
};

export default Display;
