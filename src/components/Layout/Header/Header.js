import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { NavLink } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import logo from '~/assets/images/header/logo.svg';
import { useState, useRef, useEffect } from 'react';

const cx = classNames.bind(styles);

function Header() {
    //Reset scrollY
    const [pathname, setPathName] = useState('/');
    const oldPage = useRef(pathname);

    useEffect(() => {
        if (pathname !== oldPage.current) {
            try {
                window.scroll({
                    top: 0,
                    left: 0,
                    //behavior: 'smooth',
                });
            } catch (error) {
                // for older browser
                window.scrollTo(0, 0);
            }
            oldPage.current = pathname;
        }
    }, [pathname]);
    //End reset

    return (
        <header className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('header-logo')}>
                    <div className="logo">
                        <NavLink exact="true" className={({ isActive }) => (isActive ? cx('active') : null)} to="/">
                            <img src={logo} alt="Orfarm" />
                        </NavLink>
                    </div>
                </div>
                <div className={cx('header-menu')}>
                    <ul className={cx('menu')}>
                        <li className={cx('item')}>
                            <NavLink
                                exact="true"
                                className={({ isActive }) => (isActive ? cx('active') : null)}
                                onClick={() => {
                                    setPathName('/');
                                }}
                                to="/"
                            >
                                Trang Chủ
                            </NavLink>
                        </li>
                        <li className={cx('item')}>
                            <NavLink
                                className={({ isActive }) => (isActive ? cx('active') : null)}
                                onClick={() => {
                                    setPathName('/cuahang');
                                }}
                                to="/cuahang"
                            >
                                Cửa Hàng
                            </NavLink>
                        </li>
                        <li className={cx('item')}>
                            <NavLink
                                className={({ isActive }) => (isActive ? cx('active') : null)}
                                onClick={() => {
                                    setPathName('/blog');
                                }}
                                to="/blog"
                            >
                                Blog
                            </NavLink>
                        </li>
                        <li className={cx('item')}>
                            <NavLink
                                className={({ isActive }) => (isActive ? cx('active') : null)}
                                onClick={() => {
                                    setPathName('/gioithieu');
                                }}
                                to="/gioithieu"
                            >
                                Giới Thiệu
                            </NavLink>
                        </li>
                        <li className={cx('item')}>
                            <NavLink
                                className={({ isActive }) => (isActive ? cx('active') : null)}
                                onClick={() => {
                                    setPathName('/lienhe');
                                }}
                                to="/lienhe"
                            >
                                Liên Hệ
                            </NavLink>
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
