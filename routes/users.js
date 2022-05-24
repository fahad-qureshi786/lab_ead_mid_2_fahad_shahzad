var express = require('express');
var router = express.Router();
const multer=require('multer');
const fs = require('fs')
const User=require('../server/model/users');
const path = require('path');
const {addUser, deleteUser, getAllUsers, editUser} = require("../server/controller/UserController");

//image upload
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '../uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
  },
});
let upload = multer({
  storage: storage,
}).single('image');

/* GET users listing. */
router.get('/', getAllUsers);
//insert an user into database
router.post('/add', upload,addUser)
//delete user route
router.get('/delete/:id',deleteUser)
//edit an user
router.get('/edit/:id', editUser);
module.exports = router;
