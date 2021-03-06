import getProduct from '../api';
import parseRequestUrl from '../utils'

const ProductDetail = {
    render: async ()=> {
        const request = parseRequestUrl();
        const product = await getProduct(request.id);
        if (product.error){
            return `<div>${product.error}</div>`
        }
        return `<h1>${product.name}</h1>`
    }
}

export default ProductDetail;