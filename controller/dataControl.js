const { MongoClient } = require("mongodb");
const DB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

const dataControl = {
  insertData: {
    sanhaDate: async (req, res) => {
      const data = req.body;
      console.log(data);
      const collectionName = "sanhaDate";
      try {
        client = await MongoClient.connect(DB_URI, {
          useUnifiedTopology: true,
        });
        const db = client.db(DB_NAME);
        const collection = db.collection(collectionName);

        const result = await collection.insertMany(data);
        console.log(
          `Inserted ${result.insertedCount} documents into the ${collectionName} collection`
        );
        res.json({ message: "Insert Success" });
      } catch (error) {
        console.error(
          "An error occurred while inserting data to MongoDB:",
          error
        );
      } finally {
        if (client) {
          await client.close();
        }
      }
    },
    sanhaAccount: async (req, res) => {
      const data = req.body;
      console.log(data);
      const collectionName = "sanhaAccount";
      try {
        client = await MongoClient.connect(DB_URI, {
          useUnifiedTopology: true,
        });
        const db = client.db(DB_NAME);
        const collection = db.collection(collectionName);

        const result = await collection.insertMany(data);
        console.log(
          `Inserted ${result.insertedCount} documents into the ${collectionName} collection`
        );
        res.json({ message: "Insert Success" });
      } catch (error) {
        console.error(
          "An error occurred while inserting data to MongoDB:",
          error
        );
      } finally {
        if (client) {
          await client.close();
        }
      }
    },
    lunetDate: async (req, res) => {
      const data = req.body;
      console.log(data);
      const collectionName = "lunetDate";
      try {
        client = await MongoClient.connect(DB_URI, {
          useUnifiedTopology: true,
        });
        const db = client.db(DB_NAME);
        const collection = db.collection(collectionName);
        const result = await collection.insertMany(data);
        console.log(
          `Inserted ${result.insertedCount} documents into the ${collectionName} collection`
        );
        res.json({ message: "Insert Success" });
      } catch (error) {
        console.error(
          "An error occurred while inserting data to MongoDB:",
          error
        );
      } finally {
        if (client) {
          await client.close();
        }
      }
    },
    lunetAccount: async (req, res) => {
      const data = req.body;
      console.log(data);
      const collectionName = "lunetAccount";
      try {
        client = await MongoClient.connect(DB_URI, {
          useUnifiedTopology: true,
        });
        const db = client.db(DB_NAME);
        const collection = db.collection(collectionName);
        const result = await collection.insertMany(data);
        console.log(
          `Inserted ${result.insertedCount} documents into the ${collectionName} collection`
        );
        res.json({ message: "Insert Success" });
      } catch (error) {
        console.error(
          "An error occurred while inserting data to MongoDB:",
          error
        );
      } finally {
        if (client) {
          await client.close();
        }
      }
    },
  },
  readData: {},
};

module.exports = dataControl;
