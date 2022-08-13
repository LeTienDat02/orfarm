import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import logo from '~/assets/images/header/logo.svg';

const cx = classNames.bind(styles);

function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header-logo')}>
                    <div className="logo">
                        <Link to="/">
                            <img src={logo} alt="Orfarm" />
                        </Link>
                    </div>
                </div>
                <div className={cx('header-menu')}>
                    <ul className={cx('menu')}>
                        <li className={cx('item')}>
                            <Link to="/">Trang Chủ</Link>
                        </li>
                        <li className={cx('item')}>
                            <Link to="/cuahang">Cửa Hàng</Link>
                        </li>
                        <li className={cx('item')}>
                            <Link to="/blog">Blog</Link>
                        </li>
                        <li className={cx('item')}>
                            <Link to="/gioithieu">Giới Thiệu</Link>
                        </li>
                        <li className={cx('item')}>
                            <Link to="/lienhe">Liên Hệ</Link>
                        </li>
                    </ul>
                </div>
                <div className={cx('header-right')}>
                    <div className={cx('right-logo', 'search')}>
                        <FeatherIcon className={cx('icon')} icon="search" />
                    </div>
                    <div className={cx('right-logo', 'user')}>
                        <FeatherIcon className={cx('icon')} icon="user" />
                    </div>
                    <div className={cx('right-logo', 'love')}>
                        <FeatherIcon className={cx('icon')} icon="heart" />
                        <div className={cx('count')}>0</div>
                    </div>
                    <div className={cx('right-logo', 'cart')}>
                        <FeatherIcon className={cx('icon')} icon="shopping-cart" />
                        <div className={cx('count')}>0</div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
