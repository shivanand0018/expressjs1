const express = require('express');
const app = express();
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded())

app.use('/add-product', (req, res, next) => {
    console.log('Add product');
    res.send('<html><body><form action="/product" method="POST" ><input type="text" name="product"/><button type="submit">Submit</button></form></body></html')
})
app.use('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
})
app.use('/', (req, res, next) => {
    console.log('in the next middleware');
    res.send('<h3>Hi Shivanand!</h3>')
})

app.listen('3000')

