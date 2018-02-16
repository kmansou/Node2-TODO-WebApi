const MongoClient = require('mongodb').MongoClient;

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log("unable to connect to mongodb server");
    }

    console.log("connected to mongodb server");
    var db = client.db('TodoApp');

    // db.collection('Todos').insertOne({
    //     text: 'something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('unable to insert todo document', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name: 'Nehal Hossam',
        age: 25,
        location: 'Cairo, Eg'
    }, (error, result) => {
        if (error) {
            return console.log('unable to insert user document', error);
        }

        console.log(JSON.stringify(result.ops, undefined, 2));
    });

    client.close();
});