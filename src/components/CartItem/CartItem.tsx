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

  const currency = (number: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "VND",
    }).format(number);
  };

  const removeHandler = () => {
    dispatch(cartActions.remove({ id }));
  };

  const handlerDelete = (id: any) => {
    dispatch(cartActions.delete(id));
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("image")}>
        <img
          src="http://res.cloudinary.com/dv3vzmogk/image/upload/v1659027714/anhhtus/rp6zimujsyvbm33qh4cu.jpg"
          alt=""
        />
      </div>
      <div className={cx("info")}>
        <div className={cx("name")}>{name}</div>
        <div className={cx("cart_quantity")}>
          <div className={cx("cart__quantity-title")}>Số lượng</div>
          <div className={cx("cart__quantity-range")}>
            <button onClick={removeHandler} className={cx("cart-decrease")}>
              -
            </button>
            <input type="number" value={quantity} className={cx("cart-inp")} />
            <button onClick={addHandler} className={cx("cart-increase")}>
              +
            </button>
          </div>
        </div>
        <div className={cx("price")}>
          <p className={cx("price-title")}>Tổng tiền:</p>
          <p className={cx("cart-price")}>
            {currency(+originalPrice * quantity)}
          </p>
        </div>
        <button className={cx("delete")} onClick={() => handlerDelete(id)}>
          X
        </button>
      </div>
      {/* <div className={cx("cart-info")}>
        <p className={cx("cart-name")}>{name}</p>
        <img className={cx("cart-img")} src={image} alt="" />
      </div>
      <div className={cx("cart_quantity")}>
        <div className={cx("cart__quantity-title")}>Số lượng</div>
        <button onClick={removeHandler}>-</button>
        <input type="number" value={quantity} />
        <button onClick={addHandler}>+</button>
      </div>
      <p className={cx("cart-price")}>{+originalPrice * quantity} VND</p> */}
    </div>
  );
}

export default CartItem;
