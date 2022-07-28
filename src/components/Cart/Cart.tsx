import className from "classnames/bind";
import styles from "./Cart.module.scss";
import { useSelector } from "react-redux";

import CartItem from "../CartItem";
type Props = {};

const cx = className.bind(styles);

function Cart({}: Props) {
  const cart: any = useSelector((state) => state);
  console.log(cart);

  return (
    <div>
      <h1>Giỏ hàng</h1>
      <div className={cx("wrapper")}>
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
      </div>
      {cart && (
        <div className={cx("total")}>
          <p className={cx("total-title")}>Tổng số tiền</p>
          <p className={cx("total-number")}>
            {/* {cart.reduce((total: any, curr: any) => {
              console.log(curr);
            })} */}
            VND
          </p>
        </div>
      )}
    </div>
  );
}

export default Cart;
