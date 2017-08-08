const {ObjectID} = require("mongodb");

const {mongoose} = require("./../server/db/mongoose")
const {Todo} = require("./../server/models/todo")
const {User} = require("./../server/models/todo")

// Todo.remove({}).then((result) => {
//   console.log(result);
// });
// NOTE: Running above shows what was found and removed up top at result: { n: 3, ok: 1 }

// Todo.findOneAndRemove()

// Todo.findByIdAndRemove
Todo.findByIdAndRemove("59893c6cfb820973fc32b30b").then((todo) => {
  console.log(todo);
})
