// Type alias
type Product = {
  id: number;
  name: string;
  price: number;
};

let laptop: Product = { id: 1, name: "MacBook", price: 1500 };

// Interface
interface Employee {
  id: number;
  name: string;
}

let emp: Employee = { id: 101, name: "Ali" };
