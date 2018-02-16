const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('unable to connect to mongodb server');
    }

    console.log('connected to mongodb server');
    var db = client.db('TodoApp');

    db.collection('Todos').find().toArray()
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        })
        .catch((error) => {
            console.log('error getting all Todo documents', error);
        });

    db.collection('Users').findOne({ name: 'Karim Mansour' })
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        })
        .catch((error) => {
            console.log('error getting User document by name', error);
        });

    db.collection('Users').count({ name: 'Nehal Hossam' })
        .then((result) => {
            console.log('All users documents with name equlas to Nehal Hossam count are:', result);
        })
        .catch((error) => {
            console.log('error getting users documents count', error);
        });

    //client.close();
});