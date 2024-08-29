const express = require('express');
const router = require('./routes');
const app = express();

const cors = require('cors');

app.use(cors({
    origin: '*'
}));

require('./startup/db')();

router(app);

const port = 8080;
const server = app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = server;