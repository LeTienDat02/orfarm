import styles from './Process.module.scss';
import classNames from 'classnames/bind';

import icon1 from '~/assets/images/home/trust/icon-svg1.svg';
import icon2 from '~/assets/images/home/trust/icon-svg2.svg';
import icon3 from '~/assets/images/home/trust/icon-svg3.svg';
import line1 from '~/assets/images/home/trust/line-svg1.svg';
import line2 from '~/assets/images/home/trust/line-svg2.svg';

const cx = classNames.bind(styles);
function Process() {
    return (
        <div className={cx('process')}>
            <div className={cx('item')}>
                <img src={icon1} alt="icon1" />
                <h3>Chọn sản phẩm của bạn</h3>
                <p>
                    Chọn từ các sản phẩm được chọn để bắt đầu. Giữ, thêm hoặc xóa
                    <br /> các mục.
                </p>
            </div>
            <div className={cx('img-to-item')}>
                <img className={cx('line1')} src={line1} alt="line1" />
            </div>
            <div className={cx('item')}>
                <img src={icon2} alt="icon2" />
                <h3>Cửa hàng Orfarm của chúng tôi</h3>
                <p>
                    Chúng tôi cung cấp hơn 100 sản phẩm, cung cấp đủ dinh dưỡng cho <br />
                    gia đình bạn.
                </p>
            </div>
            <div className={cx('img-to-item')}>
                <img className={cx('line2')} src={line2} alt="line2" />
            </div>
            <div className={cx('item')}>
                <img src={icon3} alt="icon3" />
                <h3>Giao hàng cho bạn</h3>
                <p>Giao hàng tận nơi. Lên đến 100km và hoàn toàn miễn phí.</p>
            </div>
        </div>
    );
}

export default Process;
