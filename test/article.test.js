import { describe, it } from "mocha";
import { expect } from "chai";
import { Article } from "../src/Article.js";

describe("Tests sur les Articles", () => {
    it("Créer un article valide", () => {
        const article = new Article(1, "Fraises", 2.5, 25);

        expect(article.getId()).to.equal(1);
        expect(article.getName()).to.equal("Fraises");
        expect(article.getPrice()).to.equal(62.5);
        expect(article.getQuantity()).to.equal(25);
        expect(article.getDiscount()).to.equal(null);
    });

    it("Créer un article avec un id égal à 0", () => {
        expect(() => new Article(0, "", 2.5, 25)).to.throw("Invalid id provided");
    });

    it("Créer un article avec un id inférieur à 0", () => {
        expect(() => new Article(-10, "", 2.5, 25)).to.throw("Invalid id provided");
    });

    it("Créer un article avec un nom invalide", () => {
        expect(() => new Article(1, "", 2.5, 25)).to.throw("Invalid name provided");
    });

    it("Créer un article avec un prix égal à 0", () => {
        expect(() => new Article(1, "Fraises", 0, 25)).to.throw("Invalid price provided");
    });

    it("Créer un article avec un prix négatif", () => {
        expect(() => new Article(1, "Fraises", -10, 25)).to.throw("Invalid price provided");
    });

    it("Créer un article avec une quantité égale à 0", () => {
        expect(() => new Article(1, "Fraises", 2.5, 0)).to.throw("Invalid quantity provided");
    });

    it("Créer un article avec une quantité négative", () => {
        expect(() => new Article(1, "Fraises", 2.5, -10)).to.throw("Invalid quantity provided");
    });

    it("Créer un article et modifier la quantité avec une valeur valide", () => {
        const article = new Article(1, "Fraises", 5, 1);
        article.setQuantity(10);
        expect(article.getQuantity()).to.equal(10);
    });

    it("Créer un article et modifier la quantité avec une valeur invalide", () => {
        const article = new Article(1, "Fraises", 5, 1);
        expect(() => article.setQuantity(-10)).to.throw("Invalid quantity provided");
    });

    it("Ajouter une quantité valide et précise à un article", () => {
        const article = new Article(1, "Fraises", 5, 1);
        article.addSpecificQuantity(10);
        expect(article.getQuantity()).to.equal(11);
    });

    it("Ajouter une quantité invalide et précise à un article", () => {
        const article = new Article(1, "Fraises", 5, 1);
        expect(() => article.addSpecificQuantity(-5)).to.throw("Invalid quantity provided");
    });

    it("Retirer une quantité valide et précise à un article", () => {
        const article = new Article(1, "Fraises", 5, 11);
        article.removeSpecificQuantity(10);
        expect(article.getQuantity()).to.equal(1);
    });

    it("Retirer une quantité supérieure à la quantité de l'article", () => {
        const article = new Article(1, "Fraises", 5, 5);
        expect(() => article.removeSpecificQuantity(6)).to.throw("Invalid quantity provided");
    });

    it("Retirer une quantité négative à la quantité de l'article", () => {
        const article = new Article(1, "Fraises", 5, 5);
        expect(() => article.removeSpecificQuantity(-1)).to.throw("Invalid quantity provided");
    });

    it("Créer un article avec une remise valide", () => {
        const article = new Article(1, "Fraises", 5, 1);
        article.setDiscount(50);
        expect(article.getDiscount()).to.equal(50);
    });

    it("Créer un article avec une invalide", () => {
        const article = new Article(1, "Fraises", 5, 1);
        expect(() => article.setDiscount(42)).to.throw("Invalid discount provided");
    });

    it("Créer un article avec 1 en quantité et une réduction valide", () => {
        const article = new Article(1, "Fraises", 5, 1);
        article.setDiscount(50);
        expect(article.getPrice()).to.equal(2.5);
    });

    it("Créer un article avec 2 ou plus en quantité et une réduction valide", () => {
        const article = new Article(1, "Fraises", 5, 7);
        article.setDiscount(50);
        expect(article.getPrice()).to.equal(32.5);
    });

    it("Ajouter une péremption")
});