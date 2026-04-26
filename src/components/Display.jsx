import styles from "./Display.module.css";

const Display = ({ buttonV }) => {
  return (
    <input value={buttonV} className={styles.display} type="text" readOnly />
  );
};

export default Display;
