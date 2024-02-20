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

    deleteProduct(id) {
        const product = this.products.find(product => product.getId() === id);
        if (!product) {
            throw new Error("Product not found");
        }

        const index = this.products.indexOf(product);
        this.products.splice(index, 1);
    }

    getTotalProducts() {
        return this.getProduct().reduce((total, product) => total + product.getQuantity(), 0);
    }
}