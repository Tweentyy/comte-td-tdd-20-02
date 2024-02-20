export class Article {
    discounts = [5, 3, 15, 33, 50, 75];

    constructor(id, name, price, quantity) {
        if (typeof id !== "number" || id <= 0) {
            throw new Error("Invalid id provided");
        }

        if (typeof name !== "string" || !name || name.length === 0) {
            throw new Error("Invalid name provided");
        }

        if (typeof price !== "number" || price <= 0) {
            throw new Error("Invalid price provided");
        }

        if (typeof quantity !== "number" || quantity <= 0) {
            throw new Error("Invalid quantity provided");
        }

        this.id = id;
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.discount = null;
    }

    getId() {
        return this.id;
    }

    getName() {
        return this.name;
    }

    getPrice() {
        const discount = this.getDiscount();
        if (!discount) return this.price * this.quantity;
        let total = this.price * ((100 - discount) / 100);
        if (this.quantity > 1) {
            total += this.price * (this.quantity - 1);
        }

        if (total <= 0) {
            throw new Error("Invalid final price");
        }

        return total;
    }

    getDiscount() {
        return this.discount;
    }

    setDiscount(discount) {
        if (!this.discounts.includes(discount)) {
            throw new Error("Invalid discount provided");
        }

        this.discount = discount;
    }

    getQuantity() {
        return this.quantity;
    }

    setQuantity(quantity) {
        if (quantity <= 0) {
            throw new Error("Invalid quantity provided");
        }

        this.quantity = quantity;
    }

    addSpecificQuantity(quantity) {
        if (quantity <= 0) {
            throw new Error("Invalid quantity provided");
        }

        this.quantity += quantity;
    }

    removeSpecificQuantity(quantity) {
        if (quantity <= 0 || this.quantity - quantity < 0) {
            throw new Error("Invalid quantity provided");
        }

        this.quantity -= quantity;
    }
}