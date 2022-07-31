import className from "classnames/bind";
import styles from "./Cart.module.scss";
import { useSelector } from "react-redux";

import CartItem from "../CartItem";
type Props = {};

const cx = className.bind(styles);

function Cart({}: Props) {
  const cart: any = useSelector((state) => state);

  const currency = (number: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "VND",
    }).format(number);
  };

  return (
    <div>
      <div className={cx("wrapper")}>
        <div className={cx("header")}>
          <p className={cx("title")}>Giỏ hàng</p>
        </div>
        {cart.map((item: any) => {
          if (item.id === null) return;
          return (
            <CartItem
              key={item.id}
              id={item.id}
              name={item.name}
              image={item.image}
              originalPrice={item.originalPrice}
              quantity={item.quantity}
            />
          );
        })}
        {cart && (
          <div className={cx("total")}>
            <p className={cx("total-title")}>Tổng số tiền:</p>
            <p className={cx("total-number")}>
              {currency(
                cart.reduce((total: any, curr: any) => {
                  return total + curr.originalPrice * curr.quantity;
                }, 0)
              )}
            </p>
          </div>
        )}
        <div className={cx("btn")}>
          <button className={cx("btn__order")}>Tiến hành đặt hàng</button>
          <button className={cx("btn__other")}>Chọn thêm sản phẩm khác</button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
