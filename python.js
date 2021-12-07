const express = require('express');
const app = express();
const cors = require('cors');
app.use(express.json());
app.use(cors());

const python_qa = [
  {
    id: 1,
    question: "What is Python ?",
    answer:
      "Python is an interepreted, high level, general purpose programming language. It's design philosopy emphasizes code readability with it's use of significant indentation. It's language constructs and it's object oriented approach aims to help developers to build clean and logical codes for small and large projects.",
  },
  {
    id: 2,
    question: "What is OOP'S ?",
    answer:
      "Object Oriented programming (OOP) is a programming paradigm that relies on the concept of classes and objects. It is used to structure a software program into simple, reusable pieces of code or blueprints (usually called classes), which are used to create individual instances of objects.Now, there are four fundamental concepts of Object-oriented programming – Inheritance, Encapsulation, Polymorphism, and Data abstraction.",
  },
  {
    id: 3,
    question: "What is Polymorphism ?",
    answer:
      "Polymorphism is one of the OOPs feature that allows us to perform a single action in different ways. For example, lets say we have a class Animalthat has a method sound(). Since this is a generic class so we can’t give it a implementation like: Roar, Meow, Oink etc. So we use the same sound() method for every animal in common.",
  },
  {
    id: 4,
    question: "What is Inheritance ?",
    answer:
      "Inheritance is a mechanism in which one object acquires all the properties and behaviors of a parent object.",
  },
  {
    id: 5,
    question: "What is Encapsulation ?",
    answer:
      "It  refers to the bundling of data, along with the methods that operate on that data, into a single unit.",
  },
  {
    id: 6,
    question: "What is Data-abstraction ?",
    answer:
      "Data abstraction is the reduction of a particular body of data to a simplified representation of the whole. Data abstraction refersto providing only essential information to the outside world and hiding their background details.",
  },
];

app.get('/python', function(request, response){
     response.send(python_qa);
});


const port = process.env.PORT || 3004

app.listen(port, ()=>console.log(`App is now running at ${port}`));
