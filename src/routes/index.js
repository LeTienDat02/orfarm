import About from '~/pages/About';
import Blog from '~/pages/Blog';
import Contact from '~/pages/Contact';
import Home from '~/pages/Home';
import Shop from '~/pages/Shop';

const routes = [
    { path: '/', component: Home },
    { path: '/gioithieu', component: About },
    { path: '/blog', component: Blog },
    { path: '/lienhe', component: Contact },
    { path: '/cuahang', component: Shop },
];

export default routes;
