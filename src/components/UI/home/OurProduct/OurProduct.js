import styles from './OurProduct.module.scss';
import classNames from 'classnames/bind';
import Product from '../../Product';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function OurProduct() {
    // Control render list product
    const [list, setList] = useState('all');
    const [productInList, setProductInList] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3000/our-product/${list}`)
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setProductInList(res.product);
            });
    }, [list]);

    const handleRenderList = (nameType) => {
        setList(nameType);
    };
    //End control render list product

    // Control move product in list
    const [i, setI] = useState(0);
    const numberProduct = 6; //Number product will render

    const handleLeft = () => {
        if (i === 0) setI(0);
        else setI(i - 1);
    };
    const handleRight = () => {
        if (i + numberProduct - 1 === productInList.length - 1) setI(productInList.length - numberProduct);
        else setI(i + 1);
    };
    // End control move product in list
    return (
        <div className={cx('our-product')}>
            <div className={cx('title')}>
                <h4>~ Sản Phẩm Của Chúng Tôi ~</h4>
                <h3>Các Mặt Hàng Hấp Dẫn</h3>
            </div>
            <ul className={cx('control-list')}>
                <li
                    className={cx({ focus: 'all' === list })}
                    onClick={() => {
                        handleRenderList('all');
                        setI(0);
                    }}
                >
                    Tất Cả Sản Phẩm
                </li>
                <li
                    className={cx({ focus: 'meat' === list })}
                    onClick={() => {
                        handleRenderList('meat');
                        setI(0);
                    }}
                >
                    Thịt Tươi Sống
                </li>
                <li
                    className={cx({ focus: 'vegetables' === list })}
                    onClick={() => {
                        handleRenderList('vegetables');
                        setI(0);
                    }}
                >
                    Rau Sạch
                </li>
                <li
                    className={cx({ focus: 'snack' === list })}
                    onClick={() => {
                        handleRenderList('snack');
                        setI(0);
                    }}
                >
                    Bánh Quy Snack
                </li>
            </ul>
            <div className={cx('list-product')}>
                {productInList.length > numberProduct - 1 && (
                    <button onClick={handleLeft} className={cx('control-left', 'control')}>
                        <FeatherIcon className={cx('icon')} icon="chevron-left" />
                    </button>
                )}

                {productInList.length > numberProduct - 1 && (
                    <button onClick={handleRight} className={cx('control-right', 'control')}>
                        <FeatherIcon className={cx('icon')} icon="chevron-right" />
                    </button>
                )}

                {productInList.map((product, index) => {
                    if (index < i) return null;
                    else if (index >= i + numberProduct) return null;
                    return (
                        <Product
                            key={index}
                            sale={product.sale}
                            img={product.img}
                            type={product.type}
                            title={product.title}
                            rate={product.rate}
                            priceReal={product.priceReal}
                            priceFake={product.priceFake}
                        />
                    );
                })}
            </div>
            <div className={cx('to-shop')}>
                <span>Khám phá hàng ngàn sản phẩm chất lượng khác. </span>
                <Link to="/cuahang">
                    Mua sắm tất cả sản phẩm <FeatherIcon className={cx('icon')} icon="chevrons-right" />
                </Link>
            </div>
        </div>
    );
}

export default OurProduct;
