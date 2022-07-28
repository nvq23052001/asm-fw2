import className from "classnames/bind";
import styles from "./CartItem.module.scss";

type Props = {};

const cx = className.bind(styles);

function CartItem({}: Props) {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("cart-info")}>
        <p className={cx("cart-name")}>Samsung Galaxy S22 Ultra</p>
        <img
          className={cx("cart-img")}
          src="https://cdn1.viettelstore.vn/images/Product/ProductImage/medium/S22-128.jpg"
          alt=""
        />
      </div>
      <div className={cx("cart_quantity")}>
        <div className={cx("cart__quantity-title")}>Số lượng</div>
        <input type="number" />
      </div>
      <p className={cx("cart-price")}>25.000.000 VND</p>
    </div>
  );
}

export default CartItem;
