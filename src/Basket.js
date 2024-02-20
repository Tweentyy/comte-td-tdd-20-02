export class Basket {
    constructor() {
        this.articles = [];
        this.globalDiscount = null;
    }

    getBasketLength() {
        return this.articles.length;
    }

    getArticles() {
        return this.articles;
    }

    addArticle(article) {
        if (article == null) {
            throw new Error("Invalid article provided");
        }

        this.articles.push(article);
    }

    addArticles(...articles) {
        const invalidArticles = articles.filter(article => article === null);
        if (invalidArticles.length > 0) {
            throw new Error("Invalid article provided");
        }

        this.articles.push(...articles);
    }

    removeArticle(articleId) {
        if (typeof articleId !== "number" || articleId <= 0) {
            throw new Error("Invalid article provided");
        }

        const article = this.articles.find(article => article.getId() === articleId);
        if (!article) {
            throw new Error("Article not found");
        }

        const index = this.articles.indexOf(article);
        this.articles.splice(index, 1);
    }

    getGlobalDiscount() {
        return this.globalDiscount;
    }

    setGlobalDiscount(discount) {
        if (discount <= 0 || discount >= 100) {
            throw new Error("Invalid discount provided");
        }
        this.globalDiscount = discount;
    }

    clear() {
        this.articles = [];
    }

    getTotal() {
        const totalBasketPrice = this.getArticles().reduce((partialSum, article) => partialSum + article.getPrice(), 0);
        const discount = this.getGlobalDiscount();

        if (discount) {
            return totalBasketPrice * ((100 - this.getGlobalDiscount()) / 100);
        } else {
            return totalBasketPrice;
        }
    }
}