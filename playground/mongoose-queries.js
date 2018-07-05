const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5b3dc10ab8642a2ed4f1c7e4111';
// if(!ObjectID.isValid(id)){
//   console.log("ID not valid");
// }
//
// Todo.find({
//   _id: id
// }).then((todos) => {
//   if(!todos){
//     return console.log("ID not found");
//   }
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todo) => {
//   if(!todo){
//     return console.log("ID not found");
//   }
//   console.log('findOne todo', todo);
// });
//
// Todo.findById(id).then((todo) => {
//   if(!todo){
//     return console.log("ID not found");
//   }
//   console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));

User.findById('5b3bd09a149a7d472c5c52da').then((user) => {
  if(!user){
    return console.log('Unable to find user');
  }

  console.log(JSON.stringify(user,undefined, 2));

}, (e) => {
  console.log(e);
});
