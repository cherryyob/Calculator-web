import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import styles from "./App.module.css";
import { useState } from "react";

function App() {
  const [buttonV, setButtonV] = useState([]);

  const handleButton = (buttonValue) => {
    if (buttonValue === "C") {
      setButtonV("");
    } else if (buttonValue === "=") {
      setButtonV(eval(buttonV));
    } else {
      const totalText = buttonV + buttonValue;

      setButtonV(totalText);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display buttonV={buttonV}></Display>
      <ButtonsContainer
        handleButton={(buttonValue) => {
          handleButton(buttonValue);
        }}
      ></ButtonsContainer>
    </div>
  );
}

export default App;
