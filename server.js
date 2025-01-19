const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const cors = require('cors');

const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const dashboardRoutes = require('./routes/dashboardRoutes')

const PORT = process.env.PORT || 8001;

const apiPath = '/api/v1/';

// Load environment variables from .env file
dotenv.config();

// Initialize Express application
const app = express();

app.use(cookieParser());

// Connect to MongoDB
connectDB();

app.use(bodyParser.json());
app.use(cookieParser());

// Middleware to parse incoming JSON requests
app.use(express.json());
app.use(
  cors({
    origin: 'http://localhost:3000', // Replace with your React app's URL
    credentials: true, // Enable cookies if necessary
  })
);

app.use(`${apiPath}user`, userRoutes);
app.use(`${apiPath}products`, productRoutes);
app.use(`${apiPath}dashboard`, dashboardRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
