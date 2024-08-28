const bodyParser = require('body-parser');
const product = require('./routes/product');

module.exports = (app) => {
    app.use(
        '/api/product/',
        bodyParser.json(),
        product
    )
}