const { MongoClient } = require("mongodb");
const DB_NAME = process.env.DB_NAME;

const dataBaseConnect = async (URI) => {
  let client;

  try {
    const client = await MongoClient.connect(URI, {
      useUnifiedTopology: true,
    });
    client.db(DB_NAME);
    console.log(`✅ Connected to MongoDB "${DB_NAME}" DATABASE`);
    return client;
  } catch (error) {
    console.error("An error occurred while connecting to MongoDB:", error);
  } finally {
    if (client) {
      await client.close();
    }
  }
};

module.exports = dataBaseConnect;
