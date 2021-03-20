import Home from './views/Home.js'
import ProductDetail from './views/ProductDetail.js';
import Error404 from './views/Error404.js';
import parseRequestUrl from './utils.js';


const routes = {
    "/": Home,
    "/product/:id": ProductDetail,
}

const router = () => {
    const request = parseRequestUrl();
    const parseUrl = 
        (request.resource ? `/${request.resource}` : '/') +
        (request.id ? '/:id' : '') +
        (request.verb ? `${request.verb}` : '')
    const view = routes[parseUrl] ? routes[parseUrl] : Error404;
    const main = document.getElementById('main-container');
    main.innerHTML = view.render()
}

window.addEventListener('load', router);
window.addEventListener('hashchange', router)