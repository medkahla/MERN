const express = require('express');
const app = express();
const cors = require("cors")

// load .env vars
require('dotenv').config(); 

// middleware
app.use(express.json(), express.urlencoded({ extended: true }), cors());

// load the port
const port = process.env.PORT


require("./config/mongoose.config")
require("./routes/authors.routes")(app)

app.listen(port, () => console.log(`Listening on port ${port} for REQuests to RESpond to.`));