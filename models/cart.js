const mongoose = require('mongoose')

const cartItemSchema = new mongoose.Schema({
  productId: {type: mongoose.Schema.Types.ObjectId, ref: "products", required: true},
  quantity: {type: Number, required: true, default: 1},
  price:{type: Number, required: true}
});

const cartSchema = new mongoose.Schema({
  userId: {type: mongoose.Schema.Types.ObjectId, ref: "users", required: true},
  items: [cartItemSchema],
  totalAmount: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;