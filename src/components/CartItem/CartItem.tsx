import className from "classnames/bind";
import styles from "./CartItem.module.scss";
import { useDispatch } from "react-redux";
import { cartActions } from "~/store/index";
type Props = {
  id: number;
  name: string;
  image: string;
  originalPrice: string;
  quantity: number;
};

const cx = className.bind(styles);

function CartItem({ id, name, image, originalPrice, quantity }: Props) {
  const dispatch = useDispatch();
  const addHandler = () => {
    dispatch(cartActions.add({ id, name, image, originalPrice, quantity }));
  };
  const removeHandler = () => {
    dispatch(cartActions.remove({ id }));
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("cart-info")}>
        <p className={cx("cart-name")}>{name}</p>
        <img className={cx("cart-img")} src={image} alt="" />
      </div>
      <div className={cx("cart_quantity")}>
        <div className={cx("cart__quantity-title")}>Số lượng</div>
        <button onClick={removeHandler}>-</button>
        <input type="number" value={quantity} />
        <button onClick={addHandler}>+</button>
      </div>
      <p className={cx("cart-price")}>{+originalPrice * quantity} VND</p>
    </div>
  );
}

export default CartItem;
