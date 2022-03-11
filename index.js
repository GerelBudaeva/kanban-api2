const express = require('express');
const routes = require("./routes");
const bodyParser = require("./bodyParser");

const app = express();
const PORT = 3000;

routes(app);
bodyParser(app);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})