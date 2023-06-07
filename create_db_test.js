const { MongoClient } = require("mongodb");
const uri = "mongodb://127.0.0.1:27017/";

const client = new MongoClient(uri);

const name = "nameTest";
const address = "testAddress";

async function run() {
  try {
    console.log("Trying insert....");
    const database = client.db('mydb');
    const customers = database.collection('customers');
    const myobj = { name: name, address: address };
    const result = await customers.insertOne(myobj);
    console.log(result);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
    console.log("Done.");
  }
}
run().catch(console.dir);
