const express = require("express");
const routes = require('./routes/isbn');

const app = express();

app.use(express.json());

app.use('/', routes);

const listener = app.listen(process.env.PORT || 9523, () => {
    console.log("API ist Online auf Port " + listener.address().port)
})