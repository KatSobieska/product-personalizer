import styles from "./ProductForm.module.scss";
import OptionColor from "../OptionColor/OptionColor";
import OptionSize from "../OptionSize/OptionSize";
import Button from "../Button/Button";
import PropTypes from "prop-types";

const ProductForm = (props) => {
  ProductForm.propTypes = {
    title: PropTypes.string,
    currentColor: PropTypes.string,
    color: PropTypes.array,
    currentSize: PropTypes.string,
    sizes: PropTypes.array,
  };
  const productSummary = (props) => {
    return console.log(
      "Summary\n",
      "===============\n",
      "Name:",
      props.title,
      "\n",
      "Price:",
      props.currentPrice,
      "\n",
      "Size:",
      props.currentSize,
      "\n",
      "Color:",
      props.currentColor,
      "\n"
    );
  };
  return (
    <form>
      <OptionSize
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
        sizes={props.sizes}
      />
      <OptionColor
        currentColor={props.currentColor}
        color={props.color}
        setCurrentColor={props.setCurrentColor}
      />
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
  );
};

export default ProductForm;
