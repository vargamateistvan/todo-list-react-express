const mongoose = require("mongoose");

module.exports = async () => {
  // Connect to MongoDB
  mongoose.connect("mongodb://mongo:27017/todo-db");
  mongoose.Promise = global.Promise;
  const db = mongoose.connection;

  // MongoDB status
  db.on("connecting", () => {
    console.log("connecting to MongoDB...");
  });

  db.on("error", (error) => {
    console.error("error in MongoDB connection: " + error);
    mongoose.disconnect();
  });

  db.on("connected", () => {
    console.log("connected to MongoDB.");
  });

  db.once("open", () => {
    console.log("MongoDB connection is open.");
  });

  db.on("reconnected", () => {
    console.log("MongoDB reconnected.");
  });

  db.on("disconnected", () => {
    console.log("MongoDB disconnected.");
  });
};
