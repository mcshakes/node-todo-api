const {mongoose} = require("./../server/db/mongoose")
const {Todo} = require("./../server/models/todo")

var id = "595957232b5f483d3c19e73d";

Todo.find({
  _id: id
}).then((todos) => {
  console.log("Todos", todos)
});

Todo.findOne({
  _id: id
}).then((todos) => {
  console.log("Todo", todos)
});
