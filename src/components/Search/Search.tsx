import className from "classnames/bind";

import { SearchIcon } from "~/Icons";
import styles from "./Search.module.scss";

type Props = {};

const cx = className.bind(styles);

function Search({}: Props) {
  return (
    <div className={cx("search")}>
      <button className={cx("search-btn")}>
        <SearchIcon />
      </button>
      <input type="text" className={cx("search-inp")} />
    </div>
  );
}

export default Search;
