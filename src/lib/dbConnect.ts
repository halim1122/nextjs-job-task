import { MongoClient, ServerApiVersion, Collection } from "mongodb";

let cachedClient: MongoClient | null = null;
let cachedDb: Collection | null = null;

export default async function dbConnect(collectionName: string): Promise<Collection> {
  if (cachedClient && cachedDb) return cachedDb;

  const uri = process.env.NEXT_PUBLIC_MONGODB_URI!;
  if (!uri) throw new Error("Please define NEXT_PUBLIC_MONGODB_URI in .env");

  const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });

  await client.connect(); // ✅ connect is mandatory

  const db = client.db(process.env.DB_NAME);
  const collection = db.collection(collectionName);

  cachedClient = client;
  cachedDb = collection;

  return collection;
}
