const { Schema } = require("mongoose");

const SessionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  expiry: {
    type: Date,
    required: true,
  },
});
