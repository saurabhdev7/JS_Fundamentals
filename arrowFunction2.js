
const shops = {
    purchase() {    // purchase: function(){} -->  this is the same as the purchase() function.
        console.log(this);       // It is a regular function and has its own this keyword.
    },
}
shops.purchase()





const shop = {
    purchase:()=> {    // purchase: function(){} -->  this is the same as the purchase() function
        console.log(this);      // this is the window object because arrow functions do not have their own this keyword. It is inherited from the parent scope which is the window object.
    },
}
shop.purchase()