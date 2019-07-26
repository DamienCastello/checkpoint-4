const models = require('../models');
const Cart = models.Cart;

Cart.create({
    status: 'paid',
})
.then((cart) => { console.log(cart); })
.catch((error) => { console.log(error); });

Cart.create({
    status: 'in transaction',
})
.then((cart) => { console.log(cart); })
.catch((error) => { console.log(error); });

Cart.create({
    status: 'paid',
})
.then((cart) => { console.log(cart); })
.catch((error) => { console.log(error); });

Cart.create({
    status: 'in transaction',
})
.then((cart) => { console.log(cart); })
.catch((error) => { console.log(error); });

Cart.create({
    status: 'paid',
})
.then((cart) => { console.log(cart); })
.catch((error) => { console.log(error); });