import styles from './Filter.module.scss';
import FeatherIcon from 'feather-icons-react';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

function Filter() {
    return (
        <div className={cx('filter')}>
            <div className={cx('categories')}>
                <h4>Danh Mục Sản Phẩm</h4>
                <ul className={cx('list-categories')}>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? null : cx('link-to-type'))}
                            to="/cuahang/snack"
                        >
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            Snack
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? null : cx('link-to-type'))}
                            to="/cuahang/banh-my-tuoi"
                        >
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            Bánh Mỳ Tươi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? null : cx('link-to-type'))}
                            to="/cuahang/trai-cay-tuoi"
                        >
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            Trái Cây Tươi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? null : cx('link-to-type'))}
                            to="/cuahang/thit-tuoi-song"
                        >
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            Thịt Tươi Sống
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? null : cx('link-to-type'))}
                            to="/cuahang/sua-tuoi"
                        >
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            Sữa Tươi
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            className={({ isActive }) => (isActive ? null : cx('link-to-type'))}
                            to="/cuahang/do-uong-trai-cay"
                        >
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            Đồ Uống Trái Cây
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className={({ isActive }) => (isActive ? null : cx('link-to-type'))} to="/cuahang/rau">
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            Rau
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className={cx('price')}>
                <h4>Lọc Theo Giá</h4>
                <input type="text" placeholder="Từ"></input>
                <input type="text" placeholder="Đến"></input>
                <button>Áp Dụng</button>
            </div>
            <div className={cx('rating')}>
                <h4>Đánh Giá</h4>
                <ul>
                    <li>
                        <a href="/cuahang">
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            <span>
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/cuahang">
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            <span>
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/cuahang">
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            <span>
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/cuahang">
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            <span>
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                            </span>
                        </a>
                    </li>
                    <li>
                        <a href="/cuahang">
                            <span>
                                <FeatherIcon className={cx('icon-check')} icon="check" />
                            </span>
                            <span>
                                <FeatherIcon className={cx('icon', 'raiter')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                                <FeatherIcon className={cx('icon')} icon="star" />
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Filter;
