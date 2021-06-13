const mongoose = require("mongoose");

const Database = () => {
  const { DB_PORT, DB_NAME } = process.env;
  mongoose.connect(`mongodb://localhost:${DB_PORT}/${DB_NAME}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  mongoose.model("Group", require("./api/messages/models/schemas/group"));
  mongoose.model("Message", require("./api/messages/models/schemas/message"));
  mongoose.model("User", require("./api/auth/models/schemas/user"));
};

module.exports = Database;
