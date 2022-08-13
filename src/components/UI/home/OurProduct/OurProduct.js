import styles from './OurProduct.module.scss';
import classNames from 'classnames/bind';
import Product from '../../Product';
import { Link } from 'react-router-dom';
import FeatherIcon from 'feather-icons-react';
import { listAll, listMeat, listVegetables, listSnack } from '~/constansts/home/ourProduct';
import { useState } from 'react';

const cx = classNames.bind(styles);

function OurProduct() {
    // Control render list product

    const [list, setList] = useState('all');

    let listType = [];

    if (list === 'all') listType = listAll;
    else if (list === 'meat') listType = listMeat;
    else if (list === 'vegetables') listType = listVegetables;
    else listType = listSnack;

    const handleRenderList = (nameType) => {
        setList(nameType);
    };

    //End control render list product

    // Control move product in list
    const [i, setI] = useState(0);

    const handleLeft = () => {
        if (i === 0) setI(0);
        else setI(i - 1);
    };
    const handleRight = () => {
        if (i + 5 === listType.length - 1) setI(listType.length - 6);
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
                <li className={cx({ focus: 'all' === list })} onClick={() => handleRenderList('all')}>
                    Tất Cả Sản Phẩm
                </li>
                <li className={cx({ focus: 'meat' === list })} onClick={() => handleRenderList('meat')}>
                    Thịt Tươi Sống
                </li>
                <li className={cx({ focus: 'vegetables' === list })} onClick={() => handleRenderList('vegetables')}>
                    Rau Sạch
                </li>
                <li className={cx({ focus: 'snack' === list })} onClick={() => handleRenderList('snack')}>
                    Bánh Quy Snack
                </li>
            </ul>
            <div className={cx('list-product')}>
                {listType.length > 5 && (
                    <div onClick={handleLeft} className={cx('control-left', 'control')}>
                        <FeatherIcon className={cx('icon')} icon="chevron-left" />
                    </div>
                )}

                {listType.length > 5 && (
                    <div onClick={handleRight} className={cx('control-right', 'control')}>
                        <FeatherIcon className={cx('icon')} icon="chevron-right" />
                    </div>
                )}

                {listType.map((product, index) => {
                    if (index < i) return null;
                    else if (index >= i + 6) return null;
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
