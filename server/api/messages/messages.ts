const mongoose = require("mongoose");

const saveMessage = async (message: string) => {
  const MessageModel = mongoose.model("Message");
  const newmessage = new MessageModel({ message: message });
  newmessage.save();
};

export { saveMessage };
