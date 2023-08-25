const { MongoClient } = require("mongodb");
const DB_URI = process.env.MONGODB_URI;
const DB_NAME = process.env.DB_NAME;

const collectionName = "users";

const userControl = {
  login: async (req, res) => {
    const { id, pw, email } = req.body;
    console.log(id, pw, email);
    try {
      client = await MongoClient.connect(DB_URI, {
        useUnifiedTopology: true,
      });

      const db = client.db(DB_NAME);
      const collection = db.collection(collectionName);

      const user = await collection.findOne({ email: email, password: pw });

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
    const { id, pw, email } = req.body;
    console.log(id, pw, email);
    try {
      client = await MongoClient.connect(DB_URI, {
        useUnifiedTopology: true,
      });
      const db = client.db(DB_NAME);
      const collection = db.collection(collectionName);

      const user = await collection.findOne({
        email: email,
        password: pw,
      });
      if (user) {
        res.json({ message: "User already exists" });
      } else {
        await collection.insertOne({ id: id, email: email, password: pw });
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
