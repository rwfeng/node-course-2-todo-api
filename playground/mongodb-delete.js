const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err,db) => {
  if (err){
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

// deleteMany
// db.collection('Todos').deleteMany({text: 'Eat Lunch'}).then((result) => {
//   console.log(result);
// });

//deleteOne
// db.collection('Todos').deleteOne({text: 'Eat Lunch'}).then((result) => {
//   console.log(result);
// });

//findOneAndDelete
// db.collection('Todos').findOneAndDelete({completed: false}).then((result) =>{
//   console.log(result);
// });
//
//
// db.collection('Users').find({name: 'Andrew'}).toArray().then((docs) => {
//   console.log(JSON.stringify(docs,undefined,2));
  //});


//db.collection('Users').deleteMany({name: 'Roy'});
//db.collection('Users').findOneAndDelete({_id: new ObjectID ("5b31ec6c171ed21b20630335")});

 });
