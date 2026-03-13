class Cart {
    constructor() {
        this.items = [];
    }

    addToCart(item) {
        this.items.push(item);
    }

    removeFromCart(itemId) {
        this.items = this.items.filter(item => item.id !== itemId);
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }

    getItems() {
        return this.items;
    }
}

// Example Usage
const cart = new Cart();

// Adding items to the cart
cart.addToCart({ id: 1, name: 'Item 1', price: 10 });
cart.addToCart({ id: 2, name: 'Item 2', price: 15 });

console.log('Cart Items:', cart.getItems());
console.log('Total Price:', cart.calculateTotal());

// Removing an item
cart.removeFromCart(1);
console.log('Cart Items after removal:', cart.getItems());
console.log('Total Price after removal:', cart.calculateTotal());
