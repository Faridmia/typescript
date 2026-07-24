"use strict";
// generic function to get the first element of an array
async function get(apiEndpoint) {
    const data = await fetch(apiEndpoint);
    return data.json();
}
async function main() {
    const users = await get("/api/users");
    const products = await get("/api/products");
    const orders = await get("/api/orders");
    console.log(users[0].name);
    console.log(products[0].name);
    console.log(orders[0].total);
}
main();
