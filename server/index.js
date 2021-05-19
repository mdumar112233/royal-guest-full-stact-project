const express = require('express')
const app = express()
const port = 5000;
const bodyParser = require('body-parser');
const cors = require('cors');


const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const uri = "mongodb+srv://<username>:<password>@cluster0.ij0ac.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

app.use(cors());
app.use(bodyParser());


app.get('/', (req, res) => {
  res.send('Hello new node start!')
})

client.connect(err => {
  const collection = client.db("test").collection("devices");

  app.post('/product', (req, res) => {
      const product = req.body;
      collection.insertOne(product);
      then(result => {
          res.send(result.insertedCount > 0)
      })
  })
  app.get('/home', (req, res) => {
      collection.find({})
      .toArray((err, documents) => {
          res.send(documents)
      })
  })
  app.patch('/update:id', (req, res) => {
      collection.updateOne({_id: ObjectID(req.params.id)},
      {
          $set: {status: req.body.status}
      })
  })

  app.delete('/delete/:id', (req, res) => {
    collection.deleteOne({_id: ObjectID(req.params.id)})
    .then(result => {
        req.send(result.deletedCount > 0)
    })
  })


});



app.listen(port)