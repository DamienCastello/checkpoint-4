const models = require('../models');
const Ticket = models.Ticket;

Ticket.create({
    rate: 'Adult',
    price: 8,
    showId: 2
})
.then((ticket) => { console.log(ticket); })
.catch((error) => { console.log(error); });

Ticket.create({
    rate: 'Kid',
    price: 2,
    showId: 1
})
.then((ticket) => { console.log(ticket); })
.catch((error) => { console.log(error); });

Ticket.create({
    rate: 'Adult',
    price: 8,
    showId: 2
})
.then((ticket) => { console.log(ticket); })
.catch((error) => { console.log(error); });

Ticket.create({
    rate: 'Promo',
    price: 4,
    showId: 1
})
.then((ticket) => { console.log(ticket); })
.catch((error) => { console.log(error); });

Ticket.create({
    rate: 'Adult',
    price: 8,
    showId: 1
})
.then((ticket) => { console.log(ticket); })
.catch((error) => { console.log(error); });