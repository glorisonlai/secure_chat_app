const { Schema } = require("mongoose");

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  groups: [
    {
      type: Schema.Types.ObjectId,
      ref: "Groups",
      required: false,
    },
  ],
});

export default UserSchema;
