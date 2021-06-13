const { Schema } = require("mongoose");

const GroupSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  ],
  sharedKey: {
    type: Number,
    required: true,
  },
});

export default GroupSchema;
