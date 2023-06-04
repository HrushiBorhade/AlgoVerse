const mongoose = require("mongoose");
const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_CONNECTION_URL);

    console.log(
      "MongoDB Server Connected✨" + connect.connection.host,
      connect.connection.name
    );
  } catch (error) {
    console.log(error);
    process.exit();
  }
};

module.exports = { connectDb };
