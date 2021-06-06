import { MongoClient } from "mongodb";

export async function getAllDocuments(client, collection, sort, filter = {}) {
  const documents = await client
    .db()
    .collection(collection)
    .find(filter) // this changed - we use the "filter" parameter!
    .sort(sort)
    .toArray();

  return documents;
}

export async function connectDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://vuong:jXt3OiZpq3i0h32i@project0.3tqc3.mongodb.net/events?retryWrites=true&w=majority"
  );

  return client;
}

export async function insertDocument(client, collection, document) {
  const db = client.db();

  return await db.collection(collection).insertOne(document);
}
