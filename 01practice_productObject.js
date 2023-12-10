const product = {
    title: "Cricket Bat",
    description: "Cricket Bat is a piece of equipment used by batsmen in the sport of cricket to hit the ball, typically consisting of a cane handle attached to a flat-fronted willow-wood blade.",
    price: 1200,
    rating: 4.5,
    isAvailable: true,
    discount: 10,
    getDiscountedPrice: function () {
        return this.price - (this.price * this.discount) / 100;
    }
}

console.log(product);
console.log("After Discount price: " + product.getDiscountedPrice());