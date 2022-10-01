import axios from 'axios';

export class ProductService {


    getProducts() {
        return axios.get('http://127.0.0.1:5000/getArticles').then(res => //console.log(res.data[1].articles)
        res.data[1].articles
        );
    }

    createProduct(article) {
        
        return axios.get('http://127.0.0.1:5000/create_article', { params: { article: article[1].name }}).then(res => console.log(res)//res.data[1].articles
        );
    }


}