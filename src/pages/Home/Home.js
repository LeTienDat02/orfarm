import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import FeatherIcon from 'feather-icons-react';

import Ads from '~/components/UI/home/Ads';
import { useEffect, useState } from 'react';
import Process from '~/components/UI/home/Process';
import aboutImg from '~/assets/images/home/trust/about-img.png';
import listAds from '~/constansts/home/adsProduct';
import OurProduct from '~/components/UI/home/OurProduct';
import WhyChooseUs from '~/components/UI/WhyChooseUs';
import SpecialProduct from '~/components/UI/home/SpecialProduct';
import OurBlog from '~/components/UI/home/OurBlog';

const cx = classNames.bind(styles);

function Home() {
    // Handle even render loop ads

    const lengthListAds = listAds.length - 1;

    const [adsCount, setAdsCount] = useState(0);

    const handleCLickLeft = () => {
        setAdsCount(adsCount === 0 ? lengthListAds : adsCount - 1);
    };

    const handleCLickRight = () => {
        setAdsCount(adsCount === lengthListAds ? 0 : adsCount + 1);
    };
    useEffect(() => {
        const clearSetLoop = setTimeout(() => {
            setAdsCount(adsCount === lengthListAds ? 0 : adsCount + 1);
        }, 5000);
        return () => {
            clearTimeout(clearSetLoop);
        };
    }, [lengthListAds, adsCount]);
    // End handle even render loop ads

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container-ads')}>
                <div onClick={handleCLickLeft} className={cx('control-left', 'control')}>
                    <FeatherIcon className={cx('icon')} icon="chevron-left" />
                </div>
                <div onClick={handleCLickRight} className={cx('control-right', 'control')}>
                    <FeatherIcon className={cx('icon')} icon="chevron-right" />
                </div>
                {listAds.map((ads, index) => {
                    return (
                        adsCount === index && <Ads key={index} src={ads.src} title={ads.title} content={ads.content} />
                    );
                })}
            </div>
            <div className={cx('container-process')}>
                <div className={cx('about')}>
                    <img src={aboutImg} alt="about-img" />
                    <p>
                        Chúng tôi là Thị trường trực tuyến của trái cây tươi và rau quả. <br />
                        Bạn cũng có thể tìm thấy nước trái cây hữu cơ & lành mạnh, thực phẩm chế biến <br /> cũng như
                        các sản phẩm chăm sóc da nhẹ nhàng tại cửa hàng của chúng tôi.
                    </p>
                </div>
                <Process />
            </div>
            <div className={cx('container-our-product')}>
                <OurProduct />
            </div>
            <div className={cx('container-why-choose-us')}>
                <WhyChooseUs />
            </div>
            <div className={cx('container-special-product')}>
                <SpecialProduct />
            </div>
            <div className={cx('container-blog')}>
                <OurBlog />
            </div>
        </div>
    );
}

export default Home;
