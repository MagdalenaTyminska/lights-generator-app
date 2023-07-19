import PropTypes from "prop-types";
import { Text } from "./Text";
import { IconAdd } from "./icons/IconAdd";
import { IconMinus } from "./icons/IconMinus";
import styles from "./Counter.module.css";
import { useState } from "react";

export const Counter = ({ name }) => {
  const [value, setValue] = useState(0);

  const handleIncrement = () => {
    if (value <= 0) {
      return;
    }
    setValue(value + 1);
  };

  const handleDecrement = () => {
    if (value <= 0) {
      return;
    }
    setValue(value - 1);
  };

  return (
    <div className={styles.wrapper}>
      <Text>
        {value}
        {name}
      </Text>
      <nav>
        <IconAdd onClick={handleIncrement} />
        <IconMinus onClick={handleDecrement} />
      </nav>
    </div>
  );
};

Counter.propTypes = {
  name: PropTypes.string,
};
