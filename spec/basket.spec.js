const Basket = require("../src/basket.js");

describe("Basket", () => {
    let basket;
    const smallBasket = 5;
    const largeBasket = 15;

    beforeEach(() => {
        basket = new Basket();
    });

    it("Get all basket", () => {
        const expected = [];
        const getBasket = basket.getBasket();
        expect(getBasket).toEqual(expected);
    });

    it("Add items to basket", () => {
        const expected = [
            { item: "bagel", quantity: 1, price: 2.99 },
            { item: "brownie", quantity: 3, price: 3.99 },
        ];

        basket.addItem("bagel", 1);
        basket.addItem("brownie", 3);
        const bagelInBasket = basket.getBasket();
        expect(bagelInBasket).toEqual(expected);
    });

   
    it("Remove bagel from basket", () => {
        const expected = [
            { item: "brownie", quantity: 3, price: 3.99 },
        ];

        basket.addItem("bagel", 1);
        basket.addItem("brownie", 3);
        basket.removeItem("bagel");
        const updatedBasket = basket.getBasket();
        expect(updatedBasket).toEqual(expected);
    });

 
    it("Alert when basket is full", () => {
        const expected = "Basket full, Please choose a bigger basket.";

        basket.addItem("bagel", 3);
        basket.addItem("brownie", 5);
        const alert = basket.basketCapacity();
        expect(alert).toEqual(expected);
    });

    it("Create basket with larger size", () => {
        const expected = largeBasket;

        basket = new Basket(largeBasket);
        const checkSize = basket.basketSize;
        expect(checkSize).toEqual(expected);
    });

    it("Alert when trying to remove item that doesn't exist inside basket", () => {
        const expected = "This item is not in the basket.";

        basket.addItem("bagel", 3);
        basket.addItem("brownie", 5);
        const alert = basket.removeItem("Kebab");
        expect(alert).toEqual(expected);
    });

    it("Price checker for items", () => {
        const expected = 3.99;

        const checkPrice = basket.priceChecker("brownie");
        expect(checkPrice).toEqual(expected);
    });

    it("Favourite bagel quantity", () => {
        const expected = [
            { item: "chocolateBagel", quantity: 1, price: 4.99 },
            { item: "chocolateBagel", quantity: 1, price: 4.99 },
            { item: "chocolateBagel", quantity: 1, price: 4.99 },
        ];

        basket.addItem("chocolateBagel", 1);
        basket.addItem("chocolateBagel", 1);
        basket.addItem("chocolateBagel", 1);
        const alert = basket.getBasket();
        expect(alert).toEqual(expected);
    });

    // Test 9
    it("Basket total", () => {
        const expected = "£29.93";

        basket.addItem("chocolateBagel", 3);
        basket.addItem("bagel", 1);
        basket.addItem("brownie", 3);
        const total = basket.basketTotal();
        expect(total).toEqual(expected);
    });
});
