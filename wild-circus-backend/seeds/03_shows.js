const models = require('../models');
const Show = models.Show;

Show.create({
    showDate: '2019/07/18'
})
.then((show) => { console.log(show); })
.catch((error) => { console.log(error); });

Show.create({
    showDate: '2019/07.20'
})
.then((show) => { console.log(show); })
.catch((error) => { console.log(error); });
