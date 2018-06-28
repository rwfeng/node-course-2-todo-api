// const MongoClient = require('mongodb').MongoClient;
const {MongoClient} = require('mongodb');

// MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
//   if(err) {
//     return console.log('Unable to connec to MongoDb server');
//   }
//   console.log('Connected to MongoDB Server');
//
//   db.collection('Todos').insertOne({
//     text: 'Something to do',
//     completed: false
//   }, (err,result) => {
//     if (err){
//       return console.log('Unable to insert todo', err);
//     }
//
//     console.log(JSON.stringify(result.ops, undefined, 2));
//   });
//
//   db.close();
// });

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
  if(err) {
    return console.log('Unable to connec to MongoDb server');
  }
  console.log('Connected to MongoDB Server');
  const db = client.db('TodoApp')
  // db.collection('Todos').insertOne({
  //   text: 'Something to do',
  //   completed: false
  // }, (err,result) => {
  //   if (err){
  //     return console.log('Unable to insert todo', err);
  //   }
  //
  //   console.log(JSON.stringify(result.ops, undefined, 2));
  // });

  // db.collection('Users').insertOne({
  //   name: 'Roy',
  //   age: 21,
  //   location: 'San Diego'
  // }, (err,result) => {
  //   if(err){
  //     return console.log('Unable to inser user', err);
  //   }
  //
  //   console.log(result.ops[0]._id.getTimestamp());
  // });

  client.close();
});
