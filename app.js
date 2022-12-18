require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const port = process.env.PORT;


app.use(express.json({}));
app.use(express.urlencoded({extended: true}));

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({extended: true}));

// Cors
const corsOption = {
  origin: '*',
  optionSuccessStatus: 200 // Some legacy browsers (IE11, various SmartsTVs) choke on 204
}

app.use(cors(corsOption));

const router = require('./src/routers/index');
app.use('/api/v1', router);

app.listen(port, () => {
  console.log(`SERVER CONNECTED ON PORT ${port}`);
})