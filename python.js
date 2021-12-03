const express = require('express');
const mongoose = require('mongoose');
const app = express();
app.use(express.json());

mongoose.connect('mongodb://localhost/important-questions');
// I have imported that python..json file into mongo db and connecting that databse to this file.

const questionSchema = new mongoose.Schema({
    id:Number,
    question:String,
    answer:String
});// creating properties alike the properties in database

const Question = mongoose.model('Question', questionSchema);
// declaring the collection and schema and assigning them to a variable.

async function getQA(){
    return await Question.find();
};

async function run(){
    const questions = await getQA();
    console.log(questions);
};

run();

app.get('/python', function(request, response){
    response.status(200).send(python_questions)
});

const port = process.env.PORT || 3004

app.listen(port, ()=>console.log('App is now running...'));