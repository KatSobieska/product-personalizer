import PropTypes from "prop-types";
import styles from "./OptionColor.module.scss";
import clsx from "clsx";

const OptionColor = (props) => {
  const prepareColorClassName = (color) => {
    return styles[
      "color" + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  OptionColor.propTypes = {
    currentColor: PropTypes.string,
  };

  return (
    <div className={styles.colors}>
      <h3 className={styles.optionLabel}>Colors</h3>
      <ul className={styles.choices}>
        {props.color.map((item) => (
          <li key={item}>
            <button
              type="button"
              onClick={(e) => props.setCurrentColor(item)}
              className={clsx(
                prepareColorClassName(item),
                item === props.currentColor && styles.active
              )}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OptionColor;
