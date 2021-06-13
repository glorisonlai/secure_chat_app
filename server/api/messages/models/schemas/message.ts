const { Schema } = require("mongoose");

const MessageSchema = new Schema({
  message: {
    type: String,
    required: true,
  },
  group: {
    type: Schema.Types.ObjectId,
    ref: "Group",
    required: true,
  },
});

export default MessageSchema;
