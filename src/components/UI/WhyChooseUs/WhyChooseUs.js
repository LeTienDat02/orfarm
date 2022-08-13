import classNames from 'classnames/bind';
import styles from './WhyChooseUs.module.scss';
import FeatherIcon from 'feather-icons-react';

import icon1 from '~/assets/images/whyChooseUs/icon1.svg';
import icon2 from '~/assets/images/whyChooseUs/icon2.svg';
import icon3 from '~/assets/images/whyChooseUs/icon3.svg';
import icon4 from '~/assets/images/whyChooseUs/icon4.svg';
import { Link } from 'react-router-dom';
import Title from '../Title';

const cx = classNames.bind(styles);
function WhyChooseUs() {
    return (
        <div className={cx('why-choose-us')}>
            <Title
                title="~ Tại Sao Chọn Chúng Tôi ~"
                content="Điều Gì Làm Cho Chúng Tôi Khác Biệt"
                add="The liber tempor cum soluta nobis eleifend option congue doming quod mazim."
            />
            <div className={cx('list-item')}>
                <div className={cx('item')}>
                    <div className={cx('item-content')}>
                        <img src={icon1} alt="icon1" />
                        <h4>100% thực phẩm tươi</h4>
                        <p>
                            Điều chỉnh các tùy chọn chủ đề toàn cầu và xem các thay đổi thiết kế trong thời gian thực.
                        </p>
                        <a href="/">Tìm Hiểu Thêm</a>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('item-content')}>
                        <img src={icon2} alt="icon2" />
                        <h4>Chất lượng tốt</h4>
                        <p>
                            Điều chỉnh các tùy chọn chủ đề toàn cầu và xem các thay đổi thiết kế trong thời gian thực.
                        </p>
                        <a href="/">Tìm Hiểu Thêm</a>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('item-content')}>
                        <img src={icon3} alt="icon3" />
                        <h4>100% tự nhiên</h4>
                        <p>
                            Điều chỉnh các tùy chọn chủ đề toàn cầu và xem các thay đổi thiết kế trong thời gian thực.
                        </p>
                        <a href="/">Tìm Hiểu Thêm</a>
                    </div>
                </div>
                <div className={cx('item')}>
                    <div className={cx('item-content')}>
                        <img src={icon4} alt="icon4" />
                        <h4>100% hàng hữu cơ</h4>
                        <p>
                            Điều chỉnh các tùy chọn chủ đề toàn cầu và xem các thay đổi thiết kế trong thời gian thực.
                        </p>
                        <a href="/">Tìm Hiểu Thêm</a>
                    </div>
                </div>
            </div>
            <p className={cx('help')}>
                Gần 1,4 nghìn nhân viên tận tâm của chúng tôi sẵn sàng trợ giúp.
                <Link to="/lienhe">
                    {' '}
                    Trung tâm trợ giúp <FeatherIcon className={cx('icon')} icon="chevrons-right" />
                </Link>
            </p>
        </div>
    );
}

export default WhyChooseUs;
