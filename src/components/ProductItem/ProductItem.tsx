import className from "classnames/bind";
import styles from "./ProductItem.module.scss";
import { CartIcon } from "~/Icons";
type Props = {};

const cx = className.bind(styles);

function ProductItem({}: Props) {
  return (
    <div className={cx("wrapper")}>
      <p className={cx("product-name")}>Samsung galaxy S22 ultra</p>
      <img
        className={cx("product-image")}
        src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/S22-128.jpg"
        alt=""
      />
      <p className={cx("product-price")}>2.900.000 VND</p>
      <button className={cx("product-btn")}>
        <CartIcon />
      </button>
    </div>
  );
}

export default ProductItem;
