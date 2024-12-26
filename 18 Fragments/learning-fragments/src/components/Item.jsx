import styles from "./Item.module.css";
const Item = ({ foodItem, bought, handleBuyButton }) => {
  return (
    <li
      classNameNameName={
        '${styles["kg-item"]} list-group-item ${bought && "active"}'
      }
    >
      <span classNameNameName={styles["kg-span"]}>{foodItem}</span>
      <button
        classNameNameName={"${styles.button} btn btn-info"}
        onClick={handleBuyButton}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
