import React, { Component } from "react";
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from "../components/Cockpit/Cockpit";

class App extends Component {
  state = {
    persons: [
      { id: 'tyuio', name: 'John', age: 22 },
      { id: 'dfghj', name: 'Elizabeth', age: 18 },
      { id: 'cvbmn', name: 'Charles', age: 16 }
    ],
    otherState: 'Some other value',
    personsVisible: true
  }

  inputChangeHandler = (evt, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // ? equivalent of <<spread operator>> Object.assign({}, this.state.persons[personIndex]);
    const person = { ...this.state.persons[personIndex] };
    person.name = evt.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons });
  }

  togglePersons = () => {
    let toggle = !this.state.personsVisible;
    this.setState({ personsVisible: toggle });
  }

  deletePerson = (personIndex) => {
    // ? const persons = this.state.persons; -> this type of change mutates the the state directly as array is a reference type
    const persons = [...this.state.persons]; // * or -> use slice() to get a copy arr.slice()
    persons.splice(personIndex, 1);
    this.setState({ persons }); // * equialent of ({ persons: persons })
  }

  resetPersons = () => {
    this.setState({
      persons: [
        { id: 'tyuio', name: 'John', age: 22 },
        { id: 'dfghj', name: 'Elizabeth', age: 18 },
        { id: 'cvbmn', name: 'Charles', age: 16 }
      ]
    });
  }

  render() {
    let persons = null;

    if (this.state.personsVisible) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePerson} changed={this.inputChangeHandler} />
        </div>
      );
    }

    return (
      <div className={classes.App}>
        <Cockpit persons={this.state.persons} visible={this.state.personsVisible} resetPersons={this.resetPersons} togglePersons={this.togglePersons} />
        {persons}
      </div>
    );
  }
}

// * important
// ! setState() merges states
// ! useState state change replaces states
// return React.createElement('div', { className: 'App' }, React.createElement('h1', null, 'I am really a title!'));

export default App;

// ! previous version
/* <Person name={this.state.persons[0].name} age={this.state.persons[0].age} onChange={this.inputChangeHandler} />
<Person name={this.state.persons[1].name} age={this.state.persons[1].age} click={this.switchNameHandler.bind(this, 'Katy')} />
<Person name={this.state.persons[2].name} age={this.state.persons[2].age} >My hobby: playing video games</Person> */