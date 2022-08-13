import classNames from 'classnames/bind';
import Title from '../../Title';

import styles from './SpecialProduct.module.scss';
import Product from '~/components/UI/Product';
import listSpecialProduct from '~/constansts/home/specialProduct';

const cx = classNames.bind(styles);

function SpecialProduct() {
    return (
        <div className={cx('special-product')}>
            <Title
                title="~ Sản Phẩm Đặc Biệt ~"
                content="Ưu Đãi Thực Phẩm Hàng Tuần"
                add="The liber tempor kiêm soluta nobis eleifend option congue doming quod mazim."
            />
            <div className={cx('list-product')}>
                {listSpecialProduct.map((product, index) => {
                    return (
                        <div className={cx('product-item')}>
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
        </div>
    );
}

export default SpecialProduct;
