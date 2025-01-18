// routes/userRoutes.js
const express = require('express');
const { createUser, loginUser, getNewAccessToken } = require('../controller/userController');
const { createDashboardData, getDashboardData } = require('../controller/dashboardController')
const protect = require('../middleware/authMiddleware')

const router = express.Router();

// Route to create a new user
router.post('/register', createUser);

//Route to login user
router.post('/login', loginUser);

//Route to get new access token
router.post('/getNewAccessToken', getNewAccessToken)

//Route to create Dashboard data
router.post('/createDashboardData', protect, createDashboardData)

//Route to get Dashboard data
router.get('/getDashboardData', getDashboardData)

module.exports = router;
