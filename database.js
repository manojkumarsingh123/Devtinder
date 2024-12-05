

const { MongoClient } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://7974manojsingh:ezjTkvaPWbKueZhu@namstenode.v7ksp.mongodb.net/?retryWrites=true&w=majority&appName=Namstenode';
const client = new MongoClient(url);

// Database Name
const dbName = 'Test';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  const db = client.db(dbName);
  const collection = db.collection('User');

  //insert data

   let data = {
    firstName : "raj",
    lastName : "singh"
   }

   const insertResult = await collection.insertMany([data]);
 console.log('Inserted documents =>', insertResult);

  // find all doc

  const findResult = await collection.find({}).toArray();
 console.log('Found documents =>', findResult);

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());