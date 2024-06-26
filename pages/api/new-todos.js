import { MongoClient, ObjectId } from "mongodb";

const connectToDatabase = async () => {
  const client = await MongoClient.connect(
    "mongodb+srv://kanishka2222:8yXUovOrkBGgT37h@atlascluster.i04w0.mongodb.net/?retryWrites=true&w=majority&appName=AtlasCluster"
  );
  const db = client.db();
  const todosCollection = db.collection("todos");

  return { client, todosCollection };
};

const handler = async (req, res) => {
  let client;
  try {
    const { client: dbClient, todosCollection } = await connectToDatabase();
    client = dbClient;

    //post request
    if (req.method === "POST") {
      const data = req.body;
      const result = await todosCollection.insertOne(data);
      res.status(201).json(result);

      //PUT request
    } else if (req.method === "PUT") {
      const { id, task, completed } = req.body;

      if (!id || !task || completed === undefined) {
        res.status(400).json({ message: "Missing required fields" });
        return;
      }

      const result = await todosCollection.updateOne(
        { _id: new ObjectId(id) },
        { $set: { task, completed } }
      );

      if (result.matchedCount > 0) {
        res.status(200).json({ message: "Todo updated successfully" });
      } else {
        res.status(404).json({ message: "Todo not found" });
      }

      //delete request
    } else if (req.method === "DELETE") {
      const id = req.query.id;
      const result = await todosCollection.deleteOne({
        _id: new ObjectId(id),
      });
      if (result.deletedCount === 1) {
        res.status(200).json({ message: "Todo deleted successfully" });
      } else {
        res.status(404).json({ message: "Todo not found" });
      }
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  } finally {
    if (client) {
      client.close();
    }
  }
};

export default handler;
