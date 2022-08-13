import classNames from 'classnames/bind';
import styles from './Footer.module.scss';
import FeatherIcon from 'feather-icons-react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faYoutube, faSquareInstagram } from '@fortawesome/free-brands-svg-icons';

import icon1 from '~/assets/images/footer/icon-1.svg';
import icon2 from '~/assets/images/footer/icon-2.svg';
import icon3 from '~/assets/images/footer/icon-3.svg';
import icon4 from '~/assets/images/footer/icon-4.svg';
import icon5 from '~/assets/images/footer/icon-5.svg';

const cx = classNames.bind(styles);
function Footer() {
    return (
        <div className={cx('container-footer')}>
            <div className={cx('footer-content')}>
                <div className={cx('list-fast-items')}>
                    <div className={cx('item')}>
                        <img src={icon1} alt="icon1" />
                        <h5>Chuyển Phát Nhanh</h5>
                        <p>Trên tất cả các tỉnh thành</p>
                    </div>
                    <div className={cx('item')}>
                        <img src={icon2} alt="icon2" />
                        <h5>Thanh Toán An Toàn</h5>
                        <p>Thanh toán an toàn 100%</p>
                    </div>
                    <div className={cx('item')}>
                        <img src={icon3} alt="icon3" />

                        <h5>Giảm Giá Trực Tuyến</h5>
                        <p>Thêm chiết khấu khi mua nhiều lần</p>
                    </div>
                    <div className={cx('item')}>
                        <img src={icon4} alt="icon4" />
                        <h5>Trung Tâm Trợ Giúp</h5>
                        <p>Hỗ trợ tận tâm 24/7</p>
                    </div>
                    <div className={cx('item')}>
                        <img src={icon5} alt="icon5" />
                        <h5>Các Mặt Hàng Đã Được Tuyển Chọn</h5>
                        <p>Mặt hàng từ người bán được lựa chọn cẩn thận</p>
                    </div>
                </div>
                <div className={cx('list-infor-items')}>
                    <div className={cx('item', 'item-1')}>
                        <h4>Hãy Để Chúng Tôi Giúp Bạn</h4>
                        <div className={cx('content')}>
                            <p>
                                Nếu bạn có bất kỳ câu hỏi nào, vui lòng liên hệ với chúng tôi theo địa chỉ:{' '}
                                <a href="/"> support@gmail.com</a>
                            </p>
                            <div className={cx('social-network')}>
                                <p>Mạng xã hội: </p>
                                <ul className={cx('item-icons')}>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className={cx('icon')} icon={faFacebookF} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className={cx('icon')} icon={faTwitter} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className={cx('icon')} icon={faYoutube} />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="/">
                                            <FontAwesomeIcon className={cx('icon')} icon={faSquareInstagram} />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={cx('item', 'item-2')}>
                        <h4>Tìm Kiếm Orfarm?</h4>
                        <div className={cx('content')}>
                            <p>100 Điện Biên Phủ, Quận Thanh Khê, Đà Nẵng</p>
                            <ul>
                                <li>
                                    Thứ Hai - Thứ Sáu: <span>8:10 AM - 6:10 PM</span>
                                </li>
                                <li>
                                    Thứ 7: <span>10:10 AM - 06:10 PM</span>
                                </li>
                                <li>
                                    Chủ Nhật: <span>Đóng cửa</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className={cx('item', 'item-3')}>
                        <h4>Danh Mục Nóng</h4>
                        <ul className={cx('content')}>
                            <li>
                                <a href="/">Rau củ quả</a>
                            </li>
                            <li>
                                <a href="/">Sản phẩm từ sữa</a>
                            </li>
                            <li>
                                <a href="/">Thực phẩm đóng gói</a>
                            </li>
                            <li>
                                <a href="/">Đồ uống</a>
                            </li>
                            <li>
                                <a href="/">Thịt tươi sống</a>
                            </li>
                        </ul>
                    </div>
                    <div className={cx('item', 'item-4')}>
                        <h4>Bản tin của chúng tôi</h4>
                        <div className={cx('content')}>
                            <p>
                                Đăng ký danh sách gửi thư của Orfarm để nhận thông tin cập nhật về những người mới đến
                                và thông tin khác.
                            </p>
                            <div className={cx('email')}>
                                <FeatherIcon className={cx('icon-mail')} icon="mail" />
                                <input
                                    className={cx('input-mail')}
                                    type="email"
                                    name="EMAIL"
                                    placeholder="Địa chỉ email của bạn"
                                    required=""
                                />
                                <input className={cx('input-submit')} type="submit" value="Subscribe" />
                            </div>
                            <span className={cx('comfirm')}>
                                <input type="checkbox" />
                                Tôi chấp nhận các điều khoản & điều kiện & chính sách bảo mật.
                            </span>
                        </div>
                    </div>
                </div>
                <div className={cx('copyright')}>
                    Copyright © <span>ORFARM</span>
                </div>
            </div>
        </div>
    );
}

export default Footer;
