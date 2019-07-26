const models = require('../models');
const TicketCart = models.TicketCart;

TicketCart.create({
    cartId: 2,
    ticketId: 1,
    quantity: 1
})
.then((ticketCart) => { console.log(ticketCart); })
.catch((error) => { console.log(error); });

TicketCart.create({
    cartId: 5,
    ticketId: 5,
    quantity: 1
})
.then((ticketCart) => { console.log(ticketCart); })
.catch((error) => { console.log(error); });

TicketCart.create({
    cartId: 1,
    ticketId: 2,
    quantity: 2
})
.then((ticketCart) => { console.log(ticketCart); })
.catch((error) => { console.log(error); });

TicketCart.create({
    cartId: 3,
    ticketId: 4,
    quantity: 2
})
.then((ticketCart) => { console.log(ticketCart); })
.catch((error) => { console.log(error); });

TicketCart.create({
    cartId: 4,
    ticketId: 3,
    quantity: 1
})
.then((ticketCart) => { console.log(ticketCart); })
.catch((error) => { console.log(error); });