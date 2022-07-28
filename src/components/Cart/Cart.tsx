import className from "classnames/bind";
import styles from "./Cart.module.scss";

import CartItem from "../CartItem";
type Props = {};

const cx = className.bind(styles);

function Cart({}: Props) {
  return (
    <div>
      <div className={cx("wrapper")}>
        <CartItem />
      </div>
      <div className={cx("total")}>
        <p className={cx("total-title")}>Tổng số tiền</p>
        <p className={cx("total-number")}>25.000.000 VND</p>
      </div>
    </div>
  );
}

export default Cart;
