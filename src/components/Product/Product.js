import styles from "./Product.module.scss";
import clsx from "clsx";
import PropTypes from "prop-types";
import Button from "../Button/Button";
import { useState } from "react";

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);
  const [currentPrice, setCurrentPrice] = useState(props.basePrice);

  const prepareColorClassName = (color) => {
    return styles[
      "color" + color[0].toUpperCase() + color.substr(1).toLowerCase()
    ];
  };

  Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
    basePrice: PropTypes.number,
    colors: PropTypes.array,
    sizes: PropTypes.array,
  };

  const getPrice = (price) => {
    return setCurrentPrice(props.basePrice + price);
  };

  const productSummary = (props) => {
    return console.log(
      "Summary\n",
      "===============\n",
      "Name:",
      props.title,
      "\n",
      "Price:",
      currentPrice,
      "\n",
      "Size:",
      currentSize,
      "\n",
      "Color:",
      currentColor,
      "\n"
    );
  };

  return (
    <article className={styles.product}>
      <div className={styles.imageContainer}>
        <img
          className={styles.image}
          alt={props.title}
          src={`${process.env.PUBLIC_URL}/images/products/shirt-${props.name}--${currentColor}.jpg`}
        />
      </div>
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {currentPrice}$</span>
        </header>
        <form>
          <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
              {props.sizes.map((size, index) => (
                <li key={index}>
                  <button
                    type="button"
                    onClick={() => {
                      setCurrentSize(size.name);
                      getPrice(size.additionalPrice);
                    }}
                    className={clsx(size.name === currentSize && styles.active)}
                  >
                    {size.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.colors}>
            <h3 className={styles.optionLabel}>Colors</h3>
            <ul className={styles.choices}>
              {props.colors.map((item) => (
                <li key={item}>
                  <button
                    type="button"
                    onClick={(e) => setCurrentColor(item)}
                    className={clsx(
                      prepareColorClassName(item),
                      item === currentColor && styles.active
                    )}
                  />
                </li>
              ))}
            </ul>
          </div>
          <Button
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              productSummary(props);
            }}
          >
            <span className="fa fa-shopping-cart" />
          </Button>
        </form>
      </div>
    </article>
  );
};

export default Product;
