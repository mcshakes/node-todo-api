const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    console.log("Can't connect to MongoDB server...")
  }
  console.log("Connected to MongoDB server")

  
  db.close();
});
