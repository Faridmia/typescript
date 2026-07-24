type User3 = {
  id: number;
  name: string;
  email: string;
};

type Product = {
  id: number;
  name: string;
  price: number;
};

type Order = {
  id: number;
  userId: number;
  total: number;
  date: string;
  status: 'pending' | 'shipped' | 'delivered' | 'cancelled'
};


// generic function to get the first element of an array

async function get<T>(apiEndpoint: string): Promise<T> {
  const data = await fetch(apiEndpoint);
  
  return data.json();
}

async function main() {
  const users = await get<User3[]>("/api/users");
  const products = await get<Product[]>("/api/products");
  const orders = await get<Order[]>("/api/orders");

  console.log(users[0].name);
  console.log(products[0].name);
  console.log(orders[0].total);
}

main();