// Declare the necessary dependancies
const EXPRESS = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = EXPRESS();

app.listen(4567, () => console.log(`Port 4567 is up!`));
