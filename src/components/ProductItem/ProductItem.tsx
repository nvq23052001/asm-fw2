import className from "classnames/bind";
import styles from "./ProductItem.module.scss";
import { useDispatch } from "react-redux";

import { CartIcon } from "~/Icons";
import { cartActions } from "~/store";
type Props = {
  id: number;
  name: string;
  image: string;
  originalPrice: string;
};

const cx = className.bind(styles);

function ProductItem({ id, name, image, originalPrice }: Props) {
  const dispatch = useDispatch();

  const addCartHandler = () => {
    dispatch(
      cartActions.add({
        id: id,
        name: name,
        image: image,
        originalPrice: originalPrice,
        quantity: 1,
      })
    );
  };

  return (
    <div className={cx("wrapper")}>
      <p className={cx("product-name")}>{name}</p>
      <img className={cx("product-image")} src={image} alt="" />
      <p className={cx("product-price")}>{originalPrice} VND</p>
      <button className={cx("product-btn")} onClick={addCartHandler}>
        <CartIcon />
      </button>
    </div>
  );
}

export default ProductItem;
