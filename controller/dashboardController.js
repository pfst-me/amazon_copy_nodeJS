const dashboardData = require('../models/dashboard');

// Create Dashboard data
exports.createOrUpdateDashboard = async (req, res) => {
  try {
    const { _id, ...updateData } = req.body;
    const query = _id ? { _id: mongoose.Types.ObjectId(_id) } : {};

    // const dashboard = new dashboardData(req.body);
    // await dashboard.save();
    await dashboardData.findOneAndUpdate(
      query,
      updateData, // Data to update
      {
        new: true, // Return the updated document
        upsert: true, // Create a new document if no match is found
        setDefaultsOnInsert: true, // Apply default values to new documents
      }
    );

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