import { useState, useEffect } from "react";
import className from "classnames/bind";
import { useDispatch } from "react-redux";

import { cartActions } from "~/store";

import styles from "./Detail.module.scss";
import { getOnce } from "~/api/product";

import { CartIcon } from "~/Icons";
import { useParams } from "react-router-dom";

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
  const dispatch = useDispatch();
  const { id } = useParams();

  const [product, setProduct] = useState<productType>();

  useEffect(() => {
    const handleGet = async (id: any) => {
      try {
        const { data } = await getOnce(id);
        setProduct(data);
      } catch (error) {}
    };
    handleGet(id);
  }, [id]);

  const addCartHandler = () => {
    dispatch(
      cartActions.add({
        id: id,
        name: product?.name,
        image: product?.image,
        originalPrice: product?.originalPrice,
        quantity: 1,
      })
    );
  };

  const currency = (number: number) => {
    return new Intl.NumberFormat("de-DE", {
      style: "currency",
      currency: "VND",
    }).format(number);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("title")}>
        <h3 className={cx("title-name")}>Samsung Galaxy A73 (5G) 256GB</h3>
      </div>
      <div className={cx("contain")}>
        <div className={cx("info")}>
          <div className={cx("info__image")}>
            <img
              src="http://res.cloudinary.com/dv3vzmogk/image/upload/v1659027714/anhhtus/rp6zimujsyvbm33qh4cu.jpg"
              alt=""
              className={cx("info__image-main")}
            />
            <div className={cx("info__image-third")}>
              {/* <div className={cx("future")}>Tính năng nổi bật</div> */}
              <img
                src="http://res.cloudinary.com/dv3vzmogk/image/upload/v1659027714/anhhtus/rp6zimujsyvbm33qh4cu.jpg"
                alt=""
              />
              <img
                src="http://res.cloudinary.com/dv3vzmogk/image/upload/v1659027714/anhhtus/rp6zimujsyvbm33qh4cu.jpg"
                alt=""
              />
              <img
                src="http://res.cloudinary.com/dv3vzmogk/image/upload/v1659027714/anhhtus/rp6zimujsyvbm33qh4cu.jpg"
                alt=""
              />
              <img
                src="http://res.cloudinary.com/dv3vzmogk/image/upload/v1659027714/anhhtus/rp6zimujsyvbm33qh4cu.jpg"
                alt=""
              />
            </div>
          </div>
          <div className={cx("info__detail")}>
            <div>
              <div className={cx("info__detail-price")}>
                <div className={cx("info__detail-price--original")}>
                  11.690.000 ₫
                </div>
                <div className={cx("info__detail-price--sale")}>
                  11.690.000 ₫
                </div>
              </div>
              <p className={cx("info__detail-desc")}>
                Mô tả ngắn: Trước khi mua bất kỳ chiếc điện thoại nào, người
                dùng cũng sẽ quan tâm đến thiết kế sản phẩm trước. Với phiên bản
                A73, Samsung đã tạo nên một chiếc smartphone với vẻ ngoài mang
                đến cảm giác sang trọng và tinh tế.
              </p>
            </div>
            <div className={cx("btn")}>
              <button className={cx("btn-buy")}>Mua ngay</button>
              <button className={cx("btn-cart")} onClick={addCartHandler}>
                <CartIcon color="red" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
