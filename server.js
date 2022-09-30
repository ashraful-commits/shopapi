//=============================================================>     requires

const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const poductrouter = require('./routes/productroutes');
//=============================================================>    dotenv config

dotenv.config();
//=============================================================>    init port
const port = process.env.PORT || 3000;
//=============================================================>    express app
const app = express();
//=============================================================>    use for jason/urlencoded app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//=============================================================>    api router use in app
app.use('/api/product/', poductrouter);
//=============================================================>   use app for public folder static

//=============================================================>   use app for public folder static
//==============================================================>   create server
app.listen(port, () => {
  console.log(`server runing on port ${port}`.bgMagenta);
});
