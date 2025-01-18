const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define a Mongoose schema and model for your collection
const dashboardSchema = new mongoose.Schema(
  {
    carousel: [String],
    offers: String,
    promotions: String,
    deals: String,
    created_at: {
      type: Date,
      default: Date.now, // This will store the current date and time in ISO format
    },
  },
  { timestamps: true }
);

const dashboardData = mongoose.model('dashboardData', dashboardSchema);

module.exports = dashboardData;
