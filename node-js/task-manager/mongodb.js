// CRUD create read update delete

const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, { useNewUrlParser: true }, (error, client) => {
    if (error) {
        return console.log('Unable to connect to database')
    }

    const db = client.db(databaseName)

    // mongodb update operators: $set $rename etc.

    // db.collection('users').updateOne({
    //     _id: new mongodb.ObjectId("60f7f02958fc3784e6e7a6c0")
    // }, {
    //     $set: {
    //         name: 'Revital',
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('tasks').updateMany({}, {
    //     $set: {
    //         completed: true
    //     }
    // }).then((result) => {
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    db.collection('users').deleteMany({
        name: 'Rotem'
    }).then((result) => {
        console.log(result)
    }).catch((error) => {
        console.log(error)
    })

})