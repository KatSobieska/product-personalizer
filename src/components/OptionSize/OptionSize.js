import PropTypes from "prop-types";
import styles from "./OptionSize.module.scss";
import clsx from "clsx";

const OptionSize = (props) => {
  OptionSize.propTypes = {
    currentSize: PropTypes.string,
  };

  return (
    <div className={styles.sizes}>
      <h3 className={styles.optionLabel}>Sizes</h3>
      <ul className={styles.choices}>
        {props.sizes.map((size, index) => (
          <li key={index}>
            <button
              type="button"
              onClick={() => {
                props.setCurrentSize(size.name);
              }}
              className={clsx(size.name === props.currentSize && styles.active)}
            >
              {size.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionSize;
