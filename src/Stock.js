import { Article } from "./Article.js";

export class Stock {
    constructor() {
        this.products = [];
    }

    getProduct() {
        return this.products;
    }

    addProduct(product) {
        if (product instanceof Article) {
            this.products.push(product);
        } else {
            throw new Error("Invalid product provided");
        }
    }

    getTotalProducts() {
        return this.getProduct().reduce((total, product) => total + product.getQuantity(), 0);
    }
}