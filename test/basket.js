import { describe, it } from "mocha";
import { expect } from "chai";
import { Basket } from "../src/Basket.js";
import { Article } from "../src/Article.js";

describe("Tests sur le Panier", () => {
    let basket;

    beforeEach(() => {
        basket = new Basket();
        const article1 = new Article(1, "Fraises", 3.5, 10);
        const article2 = new Article(2, "Livre", 9, 9);
        const article3 = new Article(3, "Pommes", 2, 4);
        basket.addArticles(article1, article2, article3);
    });

    it("Longueur du panier valide", () => {
        expect(basket.getBasketLength()).to.equal(3);
    });

    it("Ajouter un article valide au panier", () => {
        const article = new Article(4, "Bananes", 2.5, 6);
        basket.addArticle(article);
        expect(basket.getBasketLength()).to.equal(4);
    });

    it("Ajouter un article invalide au panier", () => {
        expect(() => basket.addArticle(null)).to.throw("Invalid article provided");
        expect(basket.getBasketLength()).to.equal(3);
    });

    it("Retirer un article du panier", () => {
        basket.removeArticle(2);
        expect(basket.getBasketLength()).to.equal(2);
        const [article1, article2] = basket.getArticles();
        expect(article1.id).to.equal(1);
        expect(article2.id).to.equal(3);
    });

    it("Vider le panier", () => {
        basket.clear();
        expect(basket.getBasketLength()).to.equal(0);
    });

    it("Somme des articles du panier", () => {
        expect(basket.getTotal()).to.equal(124);
    });

    it("Ajouter un bon de réduction global au panier", () => {
        basket.setGlobalDiscount(50);
        expect(basket.getTotal()).to.equal(62);
    });
});