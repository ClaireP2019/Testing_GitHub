const MongoClient = require('mongodb').MongoClient;

const uri = 'mongodb://coding2-shard-00-01-pwvhe.gcp.mongodb.net:27017';

MongoClient.connect(uri, (err, client) => {
  if (err) {
    return console.log(err);
  }

  client.db("marker-messeger").collection('messages').insertOne({
    message: "I hope this works!"
  },
  function (err, res) {
    if (err) {
      client.db("marker-messenger").close();
      return console.log(err);
    }
    // if success, then close
    client.db("marker-messenger").close();
  })
});
