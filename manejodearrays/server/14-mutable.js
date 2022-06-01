const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const product = products.find(item => item.id === '🍕')
if (product){
    myProducts.push(product)
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));


// update
const products2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update ={
    id:'🥞',
    changer:
    {
        price:200,
        description:'hokeis'
    }

}

const productIndexv2 = products2.findIndex(item=>item.id=== update.id)

products2[productIndexv2]={
    ...products2[productIndexv2],
    ...update.changer
}
console.log(products2);

const deleteId ={
    id : '🥞',
}


const erase= products2.findIndex(item=>item.id === deleteId.id)


