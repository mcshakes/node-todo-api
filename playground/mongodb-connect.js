const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Can't connect to MongoDB server...")
  }
  console.log("Connected to MongoDB server")

  // db.collection("Todos").insertOne({
  //   text: "Something to do",
  //   completed: false
  // }, (err, result));

  db.close();
});

// go here ~/mongo/bin in terminal
// ./mongod --dbpath ~/mongo-data
