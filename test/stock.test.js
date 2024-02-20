import { describe, it } from "mocha";
import { expect } from "chai";
import { Article } from "../src/Article.js";
import { Stock } from "../src/Stock.js";

describe("Tests sur le Stock", () => {
    let stock;

    beforeEach(() => {
        stock = new Stock();
        const article1 = new Article(1, "Fraises", 3.5, 10);
        const article2 = new Article(2, "Livre", 9, 9);
        const article3 = new Article(3, "Pommes", 2, 4);
        stock.addProduct(article1);
        stock.addProduct(article2);
        stock.addProduct(article3);
    });

    it ("Ajouter un produit", () => {
        const article = new Article(4, "Bananes", 2.5, 5);
        stock.addProduct(article);
        expect(stock.getProducts().length).to.equal(4);
        expect(stock.getTotalProducts()).to.equal(28);
    });

    it ("Supprimer un produit par son id", () => {
        stock.deleteProduct(2);
        expect(stock.getProducts().length).to.equal(2);
        expect(stock.getTotalProducts()).to.equal(14);
    });
});