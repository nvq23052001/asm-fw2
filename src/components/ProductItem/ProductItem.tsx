import className from "classnames/bind";
import styles from "./ProductItem.module.scss";
import { Link } from "react-router-dom";

type Props = {
  id: number;
  name: string;
  image: string;
  originalPrice: string;
  saleOffPrice: string;
};

const cx = className.bind(styles);

function ProductItem({ id, name, image, originalPrice, saleOffPrice }: Props) {
  const currency = (number: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "VND",
    }).format(number);
  };

  return (
    <div className={cx("wrapper")}>
      <Link to={`detail/${id}`}>
        <img className={cx("product-image")} src={image} alt="" />
        <p className={cx("product-name")}>{name}</p>
        <div className={cx("product__price")}>
          <p className={cx("product__price-original")}>
            {currency(+originalPrice)}
          </p>
          <p className={cx("product__price-sale")}>
            {currency(+originalPrice)}
          </p>
        </div>
      </Link>
      <div className={cx("deal")}>
        [HOT] Thu cũ lên đời giá cao - Thủ tục nhanh - Trợ giá lên tới
        1.000.000đ
      </div>
    </div>
  );
}

export default ProductItem;
