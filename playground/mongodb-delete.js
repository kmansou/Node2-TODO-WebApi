const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log("unable to connect to mongodb server");
    }

    console.log("connected to mongodb server");
    var db = client.db('TodoApp');

    db.collection('Users').deleteMany({ name: 'Nehal Hossam' })
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        }).catch((error) => {
            console.log('error deleting all users with name Nehal Hossam', error);
        });

    db.collection('Users').findOneAndDelete({ name: 'Karim Atef Mansour' })
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        }).catch((error) => {
            console.log('error deleting first user with name Karim Atef Mansour', error);
        });
    //client.close();
});