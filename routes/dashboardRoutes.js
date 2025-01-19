const express = require('express')
const protect = require('../middleware/authMiddleware')

const router = express.Router()

const {
  createOrUpdateDashboard,
  getDashboardData,
} = require('../controller/dashboardController');

router.post('/createOrUpdateDashboard', protect, createOrUpdateDashboard)
router.get('/getDashboardData', getDashboardData)

module.exports = router