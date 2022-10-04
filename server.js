//=============================================================>     requires
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const poductrouter = require('./routes/productroutes');
const cors = require('cors');
//=============================================================>    dotenv config
dotenv.config();
//=============================================================>    init port
const port = process.env.PORT || 3000;
//=============================================================>    express app
const app = express();
//=============================================================>    use for jason/urlencoded app
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//=============================================================>   cors
app.use(cors());
//=============================================================>   PUBLIC FOLDER STATIC
app.use(express.static('public'));
//=============================================================>    api router use in app
app.use('/api/v1/product/', poductrouter);
//=============================================================>   use app for public folder static
//=============================================================>   use app for public folder static
//==============================================================>   create server
app.listen(port, () => {
  console.log(`server runing on port ${port}`.bgMagenta);
});
