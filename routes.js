const bodyParser = require('body-parser');
const product = require('./routes/product');
const auth = require('./routes/auth')

module.exports = (app) => {
    app.use(bodyParser.json())
        .use('/api/product/', product)
        .use('/api/auth/', auth)
}