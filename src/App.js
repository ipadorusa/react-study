import React, { Component } from "react";
import Gugudan from './components/gugudan';
import './App.css';

const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://github.com/reactjs/redux',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class Developer {
  constructor(firstname, lastname) {
    this.firstname = firstname;
    this.lastname = lastname;
  }
  getName() {
    return this.firstname + ' ' + this.lastname;
  }
}
const robin = new Developer('Robin', 'Wieruch');
console.log(robin.getName());

class App extends Component {
  render() {
    return (
      <div className="app">
        <h1>hi!</h1>
        <ul>
        {list.map((el) => 
          <li key={el.objectID}>
            <div>
              <span>
                <a href={el.url}>{el.title}</a>
              </span>
              <span>{el.author}</span>
              <span>{el.num_comments}</span>
              <span>{el.points}</span>
            </div>
          </li>
        )}
        </ul>
        <Gugudan/>
      </div>
    );
  }
}

export default App;
