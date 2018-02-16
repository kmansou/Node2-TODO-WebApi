const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect("mongodb://localhost:27017/TodoApp", (err, client) => {
    if (err) {
        return console.log("unable to connect to mongodb server");
    }

    console.log("connected to mongodb server");
    var db = client.db('TodoApp');

    db.collection('Todos').updateOne(
        {
            _id: new ObjectId('5a86d7bd919a6217ecb7fe89')
        }, {
            $set: {
                completed: true
            }
        }, {
            returnOriginal: false
        })
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        }).catch((error) => {
            console.log('error updating user name and increment age', error);
        });
    
    db.collection('Users').findOneAndUpdate(
        {
            name: 'Karim Mansour'
        }, {
            $set: {
                name: 'Karim Atef Mansour'
            },
            $inc: {
                age: 1
            }
        }, {
            returnOriginal: false
        })
        .then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        }).catch((error) => {
            console.log('error updating user name and increment age', error);
        });

    //client.close();
});