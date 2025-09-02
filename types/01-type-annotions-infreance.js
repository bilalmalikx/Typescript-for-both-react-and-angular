// Function with explicit type annotations
function calculateTotal(order) {
    var total = 0;
    for (var _i = 0, _a = order.items; _i < _a.length; _i++) {
        var item = _a[_i];
        total += item.price * item.quantity;
    }
    return total;
}
// Explicit type annotation while creating object
var myOrder = {
    id: 101,
    customerName: "Bilal",
    items: [
        { product: "Laptop", price: 1200, quantity: 1 },
        { product: "Mouse", price: 40, quantity: 2 },
    ],
    isPaid: false,
};
console.log("Total =", calculateTotal(myOrder)); // ✅ works fine
