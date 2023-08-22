const { MongoClient } = require("mongodb");
const DB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

const collectionName = "users";

const userControl = {
  login: async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {
      client = await MongoClient.connect(DB_URI, {
        useUnifiedTopology: true,
      });

      const db = client.db(DB_NAME);
      const collection = db.collection(collectionName);

      const user = await collection
        .findOne({ email: email, password: password })
        .toArray();
      if (user) {
        res.json({ message: "Login Success" });
      } else {
        res.json({ message: "Login Failed" });
      }
    } catch (error) {
      console.log(error);
    } finally {
      if (client) {
        await client.close();
      }
    }
  },
  register: async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {
      client = await MongoClient.connect(DB_URI, {
        useUnifiedTopology: true,
      });
      const db = client.db(DB_NAME);
      const collection = db.collection(collectionName);

      const user = await collection.findOne({
        email: email,
        password: password,
      });
      if (user) {
        res.json({ message: "User already exists" });
      } else {
        await collection.insertOne({ email: email, password: password });
        res.json({ message: "Register Success" });
      }
    } catch (error) {
      console.log(error);
    } finally {
    }
  },
  logout: async (req, res) => {
    const { email, password } = req.body;
    console.log(email, password);
    try {
    } catch (error) {
    } finally {
    }
  },
};

module.exports = userControl;
