import ButtonGoTop from '../UI/ButtonGoTop';
import Footer from './Footer';
import Header from './Header';

function Layout({ children }) {
    return (
        <div>
            <Header />
            <div className="content">{children}</div>
            <Footer />
            <ButtonGoTop />
        </div>
    );
}

export default Layout;
