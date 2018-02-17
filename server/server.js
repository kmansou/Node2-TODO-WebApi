const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/TodoApp');

const Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

const User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        trim: true,
        minLength: 1
    }
});

var newToDo = new Todo({
    text: 'finish udemy course by today'
});

newToDo.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}).catch((err) => {
    console.error('error inserting new ToDo document', err);
});

var newUser = new User({
    email: 'karim.mansour@example.com'
});

newUser.save().then((doc) => {
    console.log(JSON.stringify(doc, undefined, 2));
}).catch((err) => {
    console.error('error inserting new user document', err);
});