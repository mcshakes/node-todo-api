// const MongoClient = require("mongodb").MongoClient;

const {MongoClient, ObjectID} = require("mongodb");

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, db) => {
  if (err) {
    return console.log("Can't connect to MongoDB server...")
  }
  console.log("Connected to MongoDB server")

  // db.collection("Users").deleteMany({name: "Mac"}).then((result) => {
  //   console.log(result);
  // });

  // db.collection("Todos").deleteOne({text: "Walk the cat"}).then(function(result) {
  //    console.log(result);
  // });


  // db.collection("Users").findOneAndDelete({
  //   "_id": new ObjectID("591e0308448a932778aae74a")
  // }).then((result) => {
  //      console.log(result);
  // })

  // db.close();
});

// go here ~/mongo/bin in terminal
// ./mongod --dbpath ~/mongo-data
