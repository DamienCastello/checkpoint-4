const models = require('../models');
const User = models.User;

User.create({
    email: 'Dev@gmail.com',
    password: '1234',
    cartId: 1,
})
.then((user) => { console.log(user); })
.catch((error) => { console.log(error); });

User.create({
    email: 'Bip@gmail.com',
    password: 'Wild',
    cartId: 2,
})
.then((user) => { console.log(user); })
.catch((error) => { console.log(error); });

User.create({
    email: 'Bop@gmail.com',
    password: 'Code',
    cartId: 3,
})
.then((user) => { console.log(user); })
.catch((error) => { console.log(error); });

User.create({
    email: 'Loula@gmail.com',
    password: 'School',
    cartId: 4,
})
.then((user) => { console.log(user); })
.catch((error) => { console.log(error); });
