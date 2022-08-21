import classNames from 'classnames/bind';
import Blog from '~/components/UI/Blog';
import styles from './OurBlog.module.scss';
import listBlog from '~/constansts/home/blog';
import Title from '../../Title';

const cx = classNames.bind(styles);

function OurBlog() {
    return (
        <div className={cx('blog-content')}>
            <Title
                title="~ Đọc Blog của chúng tôi ~"
                content="Bài Đăng Mới Nhất Của Chúng Tôi"
                add="The liber tempor kiêm soluta nobis eleifend option congue doming quod mazim."
            />
            <div className={cx('list-blog')}>
                {listBlog.map((blog, index) => {
                    return (
                        <div key={index} className={cx('item-blog')}>
                            <Blog
                                key={index}
                                img={blog.img}
                                type={blog.type}
                                day={blog.day}
                                title={blog.title}
                                content={blog.content}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default OurBlog;
