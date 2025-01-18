const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

// Define a Mongoose schema and model for your collection
const userSchema = new mongoose.Schema(
  {
    customer_id: Number,
    email: String,
    phone: String,
    password: String,
    address: String,
    isPrime: Boolean,
    created_at: {
      type: Date,
      default: Date.now, // This will store the current date and time in ISO format
    },
  },
  { timestamps: true }
);

// Hash password before saving
userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model('User', userSchema);

module.exports = User;
