import classNames from 'classnames/bind';
import FeatherIcon from 'feather-icons-react';

import styles from './ListProduct.module.scss';
import Product from '../../Product';
import BtnControl from './BtnControl/BtnControl';
import { useState, useEffect } from 'react';

const cx = classNames.bind(styles);

function ListProduct() {
    //Render list product
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/shop')
            .then((res) => {
                return res.json();
            })
            .then((res) => {
                setListProduct(res);
            });
    }, []);
    //End render list product

    //Start swap pages
    const [page, setPage] = useState(1);

    const numberProduct = 12; //Number product in page

    const handleNextPage = () => {
        if (listProduct.length / page > numberProduct) {
            setPage((prev) => prev + 1);
            window.scrollTo({
                top: 0,
                //behavior: 'smooth',
            });
        }
    };

    const handleBackPage = () => {
        if (page > 1) {
            setPage((prev) => prev - 1);
            window.scrollTo({
                top: 0,
                //behavior: 'smooth',
            });
        }
    };

    const handleFocusPage = (index) => {
        setPage(index);
        window.scrollTo({
            top: 0,
            //behavior: 'smooth',
        });
    };
    //End swap pages

    const numberPage = () => {
        let allPage = [];
        const totalPage = listProduct.length / numberProduct + 1;
        for (let index = 1; index <= totalPage; index++) {
            allPage.push(
                <BtnControl
                    key={index}
                    callback={() => {
                        handleFocusPage(index);
                    }}
                    number={index}
                    checked={index === page ? true : false}
                />,
            );
        }
        return allPage;
    };

    return (
        <div className={cx('list-product-container')}>
            <div className={cx('feature')}>
                <span>Hiển thị 1-12 của 28 kết quả</span>
                <select className={cx('sort')}>
                    <option>Sắp xếp theo bán chạy</option>
                    <option>Sắp xếp theo mức độ phổ biến </option>
                    <option>Giá: từ thấp đến cao</option>
                    <option>Giá: từ cao đến thấp</option>
                </select>
            </div>
            <div className={cx('list-product')}>
                {listProduct.slice((page - 1) * 12, page * 12).map((product, index) => {
                    return (
                        <div key={index} className={cx('product')}>
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
                        </div>
                    );
                })}
            </div>
            <div className={cx('control-list')}>
                <span onClick={handleBackPage}>
                    <FeatherIcon icon="chevrons-left" />
                </span>
                {numberPage()}
                <span onClick={handleNextPage}>
                    <FeatherIcon icon="chevrons-right" />
                </span>
            </div>
        </div>
    );
}

export default ListProduct;
