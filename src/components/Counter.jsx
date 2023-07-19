import PropTypes from "prop-types";
import { Text } from "./Text";
import { IconAdd } from "./icons/IconAdd";
import { IconMinus } from "./icons/IconMinus";
import styles from "./Counter.module.css";

export const Counter = ({ name, count, onIncrement, onDecrement }) => {
  return (
    <div className={styles.wrapper}>
      <Text>
        {count}
        {name}
      </Text>
      <nav>
        <IconAdd onClick={onIncrement} />
        <IconMinus onClick={onDecrement} />
      </nav>
    </div>
  );
};

Counter.propTypes = {
  name: PropTypes.string,
  count: PropTypes.number,
};
