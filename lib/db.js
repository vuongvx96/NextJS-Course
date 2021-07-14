import { MongoClient } from "mongodb";

export async function connectToDatabase() {
    const client = await MongoClient.connect(
        'mongodb+srv://vuong:6DaIs61EzX7NShCU@project0.3tqc3.mongodb.net/auth-demo?retryWrites=true&w=majority'
    )

    return client;
}