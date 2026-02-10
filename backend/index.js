
const express = require('express');
const app = express();
const port = 6578;
const cors = require("cors");
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send("hello")


})


const { MongoClient, ServerApiVersion ,ObjectId} = require('mongodb');
const uri = "mongodb+srv://sushmithasusi293_db_user:z0ZW6AMYxpe6rCuk@cluster0.gquovth.mongodb.net/?appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();


    

        const serum = client.db("skin").collection("care")
        app.post("/post", async (req, res) => {
            const data = req.body
            const result = await serum.insertOne(data)
            res.send(result)
        })



    app.get("/getdata",async(req,res)=>{
        const sdata=serum.find()
        const result=await sdata.toArray();
        res.send(result);
    })
        app.get("/getid/:id",async(req,res)=>{
        const id=req.params.id;
        const obj={_id:new ObjectId(id)};
        const result=await serum.findOne(obj);
        res.send(result);
    })
    app.patch("/edit/:id",async(req,res)=>{
        const id=req.params.id;
        const obj={_id:new ObjectId(id)};
        const data=req.body;
        const updatedata={$set:{...data}};
        const options={upsert:true};
        const result=await serum.updateOne(obj,updatedata,options)
        res.send(result);
    })


       

    app.delete("/del/:id",async(req,res)=>{
        const id=req.params.id;
        console.log(id);
        const obj={_id:new ObjectId(id)};
        const result=await serum.deleteOne()
        res.send(result);
    })


    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);






app.listen(port, () => {
    console.log(`connect to the port:${port}`)
})
