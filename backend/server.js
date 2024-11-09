// server.js
const app = require('./app');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB connected');
  app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
})
.catch((error) => console.error('MongoDB connection error:', error));
