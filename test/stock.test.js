import { describe, it } from "mocha";
import { expect } from "chai";
import { Article } from "../src/Article.js";
import { Stock } from "../src/Stock.js";

describe("Tests sur le Stock", () => {
    let stock;

    beforeEach(() => {
        stock = new Stock();
        const article1 = new Article(1, "Fraises", 3.5, 10, new Date("2024-05-10"));
        const article2 = new Article(2, "Livre", 9, 9, new Date("2024-05-10"));
        const article3 = new Article(3, "Pommes", 2, 4, new Date("2024-05-10"));
        stock.addProduct(article1);
        stock.addProduct(article2);
        stock.addProduct(article3);
    });

    it("Ajouter un produit valide", () => {
        const article = new Article(4, "Bananes", 2.5, 5, new Date("2024-05-10"));
        stock.addProduct(article);
        expect(stock.getProducts().length).to.equal(4);
        expect(stock.getTotalProducts()).to.equal(28);
    });

    it("Ajouter un produit invalide", () => {
        expect(() => stock.addProduct(null)).to.throw("Invalid product provided");
    });

    it("Supprimer un produit valude par son id", () => {
        stock.deleteProduct(2);
        expect(stock.getProducts().length).to.equal(2);
        expect(stock.getTotalProducts()).to.equal(14);
    });

    it("Supprimer un produit invalide par son id", () => {
        expect(() => stock.deleteProduct(4)).to.throw("Product not found");
    });

    it("Récupérer un produit valide par son id", () => {
        const product = stock.getProduct(2);
        expect(product.getId()).to.equal(2);
        expect(product.getName()).to.equal("Livre");
        expect(product.getPrice()).to.equal(81);
        expect(product.getQuantity()).to.equal(9);
    });

    it("Récupérer un produit invalide par son id", () => {
        expect(() => stock.getProduct(4)).to.throw("Product not found");
    });
});