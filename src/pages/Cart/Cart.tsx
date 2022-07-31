import className from "classnames/bind";

import styles from "./Cart.module.scss";

import { useNavigate } from "react-router-dom";
import { BackIcon } from "~/Icons";
import Cart from "~/components/Cart";

type Props = {};

interface productType {
  id: number | null;
  name: string;
  feature: string;
  description: string;
  image: string;
  originalPrice: number | null;
  saleOffPrice: number | null;
}

const cx = className.bind(styles);

function Detail({}: Props) {
  const navigate = useNavigate();

  const handlerBack = () => {
    navigate(-1);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("back")} onClick={handlerBack}>
        <BackIcon />
        <span>Back</span>
      </div>
      <Cart />
    </div>
  );
}

export default Detail;
