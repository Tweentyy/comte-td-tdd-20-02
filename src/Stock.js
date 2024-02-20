import { Article } from "./Article.js";

export class Stock {
    constructor() {
        this.products = [];
    }

    getProducts() {
        return this.products;
    }

    getProduct(id) {
        const product = this.getProducts().find(product => product.getId() === id);
        if (!product) {
            throw new Error("Product not found");
        }

        return product;
    }

    addProduct(product) {
        if (product instanceof Article) {
            this.getProducts().push(product);
        } else {
            throw new Error("Invalid product provided");
        }
    }

    deleteProduct(id) {
        const product = this.getProducts().find(product => product.getId() === id);
        if (!product) {
            throw new Error("Product not found");
        }

        const index = this.getProducts().indexOf(product);
        this.getProducts().splice(index, 1);
    }

    getTotalProducts() {
        const totalProducts = this.getProducts().reduce((total, product) => total + product.getQuantity(), 0);
        if (totalProducts < 0) {
            throw new Error("Total products cannot be negative");
        }

        return totalProducts;
    }

    displayProducts() {
        return this.getProducts().map(product => console.log(`${product.name} - ${product.price}€ - ${product.quantity} unité(s)`));
    }
}