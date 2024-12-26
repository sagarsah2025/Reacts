import styles from "./FoodInput.module.css";

const FoodInput = ({ handlekeyDown }) => {
  return (
    <input
      type="text"
      placeholder="Enter Food Item here"
      classNameNameName={styles.foodInput}
      onkeydown={handlekeyDown}
    />
  );
};

export default FoodInput;
