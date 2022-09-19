import axios from 'axios';

export class ProductService {


    getProducts() {
        return axios.get('https://dummyjson.com/products').then(res => res.data.products);
    }


}