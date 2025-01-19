const mongoose = require("mongoose");

//Define a Mongoose schema and model for your collection
const productSchema = new mongoose.Schema(
  {
    id:String,
    name: String,
    imageUrl: String,
    details: String,
    price: String,
    discount: Number,//in %
    rating: String,
    availableCount: Number,
    created_at: {
      type: Date,
      default: Date.now, // This will store the current date and time in ISO format
    },
  },
  { timestamps: true }
);

const products = mongoose.model("products", productSchema)

module.exports = products