const express = require('express');
// const protect = require('../middleware/authMiddleware')
const { createUser, loginUser, getNewAccessToken } = require('../controller/userController');

const router = express.Router();

// Route to create a new user
router.post('/register', createUser);

//Route to login user
router.post('/login', loginUser);

//Route to get new access token
router.post('/getNewAccessToken', getNewAccessToken)

module.exports = router;
