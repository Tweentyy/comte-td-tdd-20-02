import { describe } from "mocha";
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
});