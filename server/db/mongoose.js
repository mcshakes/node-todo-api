var mongoose = require("mongoose");

mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/TodoApp")
// NOTE: MONGODB_URI set as Heroku Config. View in Terminal with `heroku config`
module.exports = mongoose;
