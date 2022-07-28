import { useEffect, useState } from "react";
import className from "classnames/bind";

import styles from "./Home.module.scss";

import ProductItem from "~/components/ProductItem";
import Cart from "~/components/Cart";
import { getAll } from "~/api/product";

type Props = {};

const cx = className.bind(styles);

function Home({}: Props) {
  const [dataTable, setDataTable] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await getAll();
        const result = data;
        setDataTable(result);
      } catch (err) {}
    };

    fetchData();
  }, []);

  return (
    <div className={cx("wrapper")}>
      <h1>Sản phẩm</h1>
      <div className={cx("container")}>
        {dataTable.map((data: any) => (
          <ProductItem
            key={data.id}
            id={data.id}
            name={data.name}
            image={data.image}
            originalPrice={data.originalPrice}
          />
        ))}
      </div>
      <Cart />
    </div>
  );
}

export default Home;
