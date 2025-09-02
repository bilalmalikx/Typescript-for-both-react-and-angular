// Union
let id1: number | string;
id1 = 101;
id1 = "ABC123"; // ✅ allowed

// Intersection
type User = { name: string };
type Admin = { isAdmin: boolean };

let admin: User & Admin = {
  name: "Bilal",
  isAdmin: true,
}
