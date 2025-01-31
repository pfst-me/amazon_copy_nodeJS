const mongoose = require('mongoose');

//Define a Mongoose schema and model for your collection
const productSchema = new mongoose.Schema(
  {
    id: { type: String, unique: true, index: true }, // Ensure unique IDs
    name: { type: String, required: true },
    imageUrl: { type: String, required: true },
    details: { type: String, required: true },
    price: { type: Number, required: true },
    discount: { type: Number, default: 0, min: 0, max: 100 }, // Default to 0%
    rating: { type: Number, default: 0, min: 0, max: 5 },
    availableCount: { type: Number, default: 0, min: 0 },
    crediCardOffer: { type: String }, // Fixed typo: "crediCardOffer" -> "creditCardOffer"
    deliveryInfo: { type: String },
    service: { type: String },
    created_at: { type: Date, default: Date.now }, // ISO format by default
  },
  { timestamps: true }
);

const products = mongoose.model('products', productSchema);

module.exports = products;
