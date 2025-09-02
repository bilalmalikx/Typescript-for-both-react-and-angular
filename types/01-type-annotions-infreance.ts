// Define a type for Order
type Order = {
  id: number;
  customerName: string;
  items: { product: string; price: number; quantity: number }[];
  isPaid: boolean;
};

// Function with explicit type annotations
function calculateTotal(order: Order): number {
  let total: number = 0;
  for (let item of order.items) {
    total += item.price * item.quantity;
  }
  return total;
}

// Explicit type annotation while creating object
const myOrder: Order = {                                                              
  id: 101,
  customerName: "Bilal",
  items: [
    { product: "Laptop", price: 1200, quantity: 1 },
    { product: "Mouse", price: 40, quantity: 2 },
  ],
  isPaid: false,
};                        

console.log("Total =", calculateTotal(myOrder)); // ✅ works fine
