import React, {useState} from 'react';
import Flashcardlist from './Flashcardlist';
import './App.css'

function App() {
  const [flashcards, setFlashcards] = useState(SAMPLE_FLASHCARDS)

  return (
    <div className="container">
      <Flashcardlist flashcards={flashcards}/>
    </div>
  );
}

const SAMPLE_FLASHCARDS = [
  {
    id: 1,
    question: 'What is a JS Object?',
    answer: 'A JS object holds multiple values in terms of properties and methods.',
  },
  {
    id: 2,
    question: 'What is a JS Array?',
    answer: 'A JS array is an ordered list of values. An array can hold values of different types.',
  },
  {
    id: 3,
    question: 'What is a JS Constructor?',
    answer: 'A JS Constructor is a function that creates an instance of a class which is typically called an object. A constructor gets called by the use of the new keyword',
  },
  {
    id: 4,
    question: 'What is a JS RegExp?',
    answer: 'Are patterns used to match character combinations in strings',
  },
  {
    id: 5,
    question: 'What is a JS Method?',
    answer: 'Is a function which is a property of an object, a method is an object referecne to a function.',
  },
  {
    id: 6,
    question: 'What is a JS Callback?',
    answer: 'Is a function that is yet to be executed, due to it waiting for another function to finish first.',
  },
  {
    id: 7,
    question: 'What is a JS Function?',
    answer: 'A function is a set of statements that peform task or calculates a value.',
  },
  {
    id: 8,
    question: 'What is the DOM?',
    answer: 'Is a programming interface that can change the style, structure and content of the HTML or XML document.',
  },
  {
    id: 9,
    question: 'What is an Event Listener?',
    answer: 'It is a function that waits for an event to occur.',
  },
  {
    id: 10,
    question: 'What is a High Order function in JS?',
    answer: 'They are functions that operate on other functions, either by taking them as arguments or by returning them.',
  },
  {
    id: 11,
    question: 'What is OOP?',
    answer: 'Object-Oriented Programming is about writing procedures or functions that perform operations on the data.',
  },
  {
    id: 12,
    question: 'What is a Front-end Developer?',
    answer: 'Is someone who is able to convert data to a graphical interface so therefore users are able to view it and interact with it.',
  },
  {
    id: 13,
    question: 'What is a Back-end Developer?',
    answer: 'Is someone who is able to work with the server side of an application and everything that goes along with the communication of the database and browser.',
  },
  {
    id: 14,
    question: 'What is a React Hook?',
    answer: 'Functions that let us hook into the react state and lifecylce features from function components.',
  },
  {
    id: 15,
    question: 'What is a Framework?',
    answer: 'A framework in programming is a tool that provides ready-made components or solutions that are customized in order to speed up development.'
  }
]

export default App;
