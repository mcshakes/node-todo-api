// const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Can't connect to MongoDB server...")
  }
  console.log("Connected to MongoDB server")

  db.collection("Users").findOneAndUpdate({
    _id : new ObjectID("591e030395284e2766537705")
  }, {
    $set: {
      name: "Edward"
    },
    $inc: {
      age: +1
    }
  }, {
    returnOriginal: false
  }).then((result) => {
    console.log(result);
  })
  // db.close();
});

// go here ~/mongo/bin in terminal
// ./mongod --dbpath ~/mongo-data
