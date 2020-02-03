const db = require("mongoose");
const Model = require("./model");

db.Promise = global.Promise;
db.connect(
  "mongodb+srv://db_user_platzinode:andru3008873964@cluster0-fbmpf.mongodb.net/test?retryWrites=true&w=majority",
  { useCreateIndex: true, useUnifiedTopology: true, useNewUrlParser: true }
)
  .then(() => console.log("[db] Conectada con exito"))
  .catch(err => console.error(["db", err]));

function addMessage(message) {
  // list.push(message);
  const myMessage = new Model(message);
  myMessage.save();
}

async function getMessage() {
  const messages = await Model.find();
  return messages;
}

async function updateText() {
  const fountMessage = await Model.findOne({
    _id: id
  });

  fountMessage.message = message;
  const newMessage = await fountMessage.save();
  return newMessage;
}

module.exports = {
  add: addMessage,
  list: getMessage
};
