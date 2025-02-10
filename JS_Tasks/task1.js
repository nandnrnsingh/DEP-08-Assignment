// Problem 1 .Inventory Price Update
// Description:

// You have an array of product objects. Each object contains an id, name, price, and quantity. Your tasks are:
// Using Map: Update the price by applying a 10% discount to products with a quantity greater than 100.
// Using Filter: Create a new array containing only the products that received the discount (i.e. where the discounted price is less than the original price).
// using forEach: Log a message for each discounted product showing the product name and its new price.
// const products = [   { id: 1, name: "Widget", price: 50, quantity: 120 },   { id: 2, name: "Gadget", price: 30, quantity: 80 },   { id: 3, name: "Doohickey", price: 100, quantity: 200 },   { id: 4, name: "Thingamajig", price: 75, quantity: 90 } ];
 


const arr = [  
    { id: 1, name: "Widget", price: 50, quantity: 120 },  
    { id: 2, name: "Gadget", price: 30, quantity: 80 }, 
    { id: 3, name: "Doohickey", price: 100, quantity: 200 },
    { id: 4, name: "Thingamajig", price: 75, quantity: 90 } 
];

// 1 : using map : apply 10% discount to product with quantity > 100 

const updatedPrice = arr.map( (product) => {
    if(product.quantity > 100)
    {
        return {
            // ...product,
            // price : product.price * 0.9
            id : product.id,
            name : product.name,
            price : product.price*0.9,
            quantity : product.quantity
        }
    }

    return product;
})

console.log(updatedPrice);


// 2 : using Filter : Create a new array containing only the products that received the discount (i.e. where the discounted price is less than the original price).

const filteredArr = updatedPrice.filter( (product) => {
    if(product.quantity > 100){
        return product;
    }
})

console.log(filteredArr);

// 3 : using forEach: Log a message for each discounted product showing the product name and its new price.

filteredArr.forEach( (product) =>{
    console.log(`Product : ${product.name} , new Price : ${product.price}`);
})