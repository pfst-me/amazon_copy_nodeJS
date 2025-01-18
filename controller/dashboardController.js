// controllers/dashboardController.js
const dashboardData = require('../models/dashboard');

// Create Dashboard data
exports.createDashboardData = async (req, res) => {
  try {
    const dashboard = new dashboardData(req.body);
    await dashboard.save();

    res.status(201).json({
      success: true,
      message: 'Dashboard data updated successfully.'
    });
  } catch (err) {
    console.error('Error on Dashboard data update.', err);
    res.status(500).json({ message: 'Error on Dashboard data update.', error: err });
  }
};


// Get all Dashboard data
exports.getDashboardData = async (req, res) => {
  try {
    const data = await dashboardData.find();

    res.status(200).json({
      success: true,
      dashboardData: data,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Error fetching dashboard data.',
      error: err,
    });
  }
};