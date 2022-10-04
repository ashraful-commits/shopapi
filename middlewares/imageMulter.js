const multer = require('multer');
const path = require('path');
const fs = require('fs');
//============================================================> create diskstorage

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, '../public/images'));
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});
//===============================================================> ccreate multer

const productMulter = multer({
  storage,
}).single('photo');

//===============================================================> export multer
module.exports = {
  productMulter,
};
