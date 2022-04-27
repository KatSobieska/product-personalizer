import styles from "./Product.module.scss";
import PropTypes from "prop-types";
import { useState, useMemo } from "react";
import ProductImage from "../ProductImage/ProductImage";
import ProductForm from "../ProductForm/ProductForm";

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  Product.propTypes = {
    id: PropTypes.number,
    name: PropTypes.string,
    title: PropTypes.string,
    basePrice: PropTypes.number,
    colors: PropTypes.array,
    sizes: PropTypes.array,
  };

  const currentPrice = useMemo(() => {
    const size = props.sizes.find((element) => element.name === currentSize);
    return props.basePrice + size.additionalPrice;
  }, [props.basePrice, currentSize, props.sizes]);

  return (
    <article className={styles.product}>
      <ProductImage name={props.name} currentColor={currentColor} />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {currentPrice}$</span>
        </header>
        <ProductForm
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          sizes={props.sizes}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          color={props.colors}
          productSummary={props.productSummary}
          title={props.title}
          currentPrice={currentPrice}
        />
      </div>
    </article>
  );
};

export default Product;
