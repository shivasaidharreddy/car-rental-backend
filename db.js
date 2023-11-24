const mongoose = require("mongoose");

function connectDB() {
  mongoose.connect(
    'mongodb+srv://shivasaidhar2020:Gms9cpmSRqc7nXkX@atlascluster.sq2pu2e.mongodb.net/Carrentalp12',
    { useUnifiedTopology: true, useNewUrlParser: true }
  );

  const connection = mongoose.connection;

  connection.once('open', () => {
    console.log('MongoDB connection successful');
  });

  connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
  });

  // If you want to handle the disconnection event
  connection.on('disconnected', () => {
    console.log('MongoDB connection disconnected');
  });

  // Close the Mongoose connection if the Node process ends
  process.on('SIGINT', () => {
    mongoose.connection.close(() => {
      console.log('MongoDB connection closed due to app termination');
      process.exit(0);
    });
  });
}

connectDB();

module.exports = mongoose;

