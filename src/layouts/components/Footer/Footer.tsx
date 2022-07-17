import className from "classnames/bind";

import styles from "./Footer.module.scss";
import images from "~/assets";

type Props = {};

const cx = className.bind(styles);

function Footer({}: Props) {
  return (
    <footer className={cx("footer")}>
      <div className={cx("contact")}>
        <div className={cx("contact-box")}>
          <p className={cx("contact-title", "contact-head")}>Tìm cửa hàng</p>
          <p className={cx("contact-title")}>Mua hàng từ xa</p>
          <p className={cx("contact-title")}>Gặp trực tiếp cửa hàng gần nhất</p>
          <p className={cx("contact-title", "contact-head")}>
            Phương thức thanh toán
          </p>
          <div className={cx("contact-logo")}>
            <img src={images.citiIcon} alt="" />
            <img src={images.moca} alt="" />
            <img src={images.redivo} alt="" />
            <img src={images.vnplay} alt="" />
          </div>
        </div>
        <div className={cx("contact-box")}>
          <p className={cx("contact-title")}>
            Gọi mua hàng: 1800.2044 (8h00 - 22h00)
          </p>
          <p className={cx("contact-title")}>
            Gọi khiếu nại: 1800.2063 (8h00 - 21h30)
          </p>
          <p className={cx("contact-title")}>
            Gọi bảo hành: 1800.2064 (8h00 - 21h00)
          </p>
          <p className={cx("contact-title", "contact-head")}>
            Đối tác dịch vụ bảo hành
          </p>
          <p className={cx("contact-title")}>Điện thoại - Máy tính</p>
          <p className={cx("contact-title", "contact-head")}>
            Trung tâm bảo hành ủy quyền Apple
          </p>
          <div className={cx("contact-logo")}>
            <img src={images.baohanh} alt="" />
          </div>
        </div>
        <div className={cx("contact-box")}>
          <p className={cx("contact-title")}>Mua hàng và thanh toán Online</p>
          <p className={cx("contact-title")}>Mua hàng trả góp Online</p>
          <p className={cx("contact-title")}>Tra thông tin đơn hàng</p>
          <p className={cx("contact-title")}>Tra điểm Smember</p>
          <p className={cx("contact-title")}>Tra thông tin bảo hành</p>
          <p className={cx("contact-title")}>Tra cứu hoá đơn VAT điện tử</p>
          <p className={cx("contact-title")}>Trung tâm bảo hành chính hãng</p>
          <p className={cx("contact-title")}>
            Quy định về việc sao lưu dữ liệu
          </p>
          <p className={cx("contact-title")}>Dịch vụ bảo hành điện thoại</p>
        </div>
        <div className={cx("contact-box")}>
          <p className={cx("contact-title")}>Quy chế hoạt động</p>
          <p className={cx("contact-title")}>Chính sách Bảo hành</p>
          <p className={cx("contact-title")}>Liên hệ hợp tác kinh doanh</p>
          <p className={cx("contact-title")}>Khách hàng doanh nghiệp (B2B)</p>
          <p className={cx("contact-title")}>Ưu đãi thanh toán</p>
          <p className={cx("contact-title")}>Tuyển dụng</p>
        </div>
      </div>
      <div className={cx("name")}>
        <div className={cx("contact")}>
          <div className={cx("contact-box")}>
            <p className={cx("contact-title")}>
              Điện thoại iphone 13 - Điện thoại Iphone 11 - Điện thoại Ipone 10
            </p>
            <p className={cx("contact-title")}>
              Điện thoại iphone 13 - Điện thoại Iphone 11 - Điện thoại Ipone 10
            </p>
            <p className={cx("contact-title")}>
              Điện thoại iphone 13 - Điện thoại Iphone 11 - Điện thoại Ipone 10
            </p>
          </div>
          <div className={cx("contact-box")}>
            <p className={cx("contact-title")}>
              Điện thoại iphone 13 - Điện thoại Iphone 11 - Điện thoại Ipone 10
            </p>
            <p className={cx("contact-title")}>
              Điện thoại iphone 13 - Điện thoại Iphone 11 - Điện thoại Ipone 10
            </p>
            <p className={cx("contact-title")}>
              Điện thoại iphone 13 - Điện thoại Iphone 11 - Điện thoại Ipone 10
            </p>
          </div>
          <div className={cx("contact-box")}>
            <p className={cx("contact-title")}>
              Điện thoại iphone 13 - Điện thoại Iphone 11 - Điện thoại Ipone 10
            </p>
            <p className={cx("contact-title")}>
              Điện thoại iphone 13 - Điện thoại Iphone 11 - Điện thoại Ipone 10
            </p>
            <p className={cx("contact-title")}>
              Điện thoại iphone 13 - Điện thoại Iphone 11 - Điện thoại Ipone 10
            </p>
          </div>
        </div>
        <div className={cx("company")}>
          Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD:
          0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352
          Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam.
          Điện thoại: 028.7108.9666.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
