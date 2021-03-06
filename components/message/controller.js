const store = require("./store");

function addMessage(user, message) {
  return new Promise((resolve, reject) => {
    if (!user || !message) {
      console.error("[messageController] no hay usuario ni mensaje");
      reject("Los datos son incorrectos");
      return false;
    }
    const fullMessage = {
      user: user,
      message: message,
      date: new Date()
    };

    store.add(fullMessage);

    console.log(fullMessage);
    resolve(fullMessage);
  });
}

function getMessages() {
  return new Promise((resolve, reject) => {
    resolve(store.list());
  });
}

function updateMessages(id, message) {
  return new Promise(async (resolve, reject) => {
    if (!id || !message) {
      reject("Invalid data");
      return false;
    }
    const result = await store.updateText(id, message);
    resolve(result);
  });
}

module.exports = {
  addMessage,
  getMessages
};
