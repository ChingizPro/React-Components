import React, { Component } from "react";
import classes from './App.module.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('%c [App.js] constructor()', 'color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('%c [App.js] getDerivedStateFromProps()', 'color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;');
    return null;
  }

  componentDidMount() {
    console.log('%c [App.js] componentDidMount()', 'color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;');
  }

  shouldComponentUpdate() {
    console.log('%c [App.js] shouldComponentUpdate()', 'color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;');
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('%c [App.js] getSnapshotBeforeUpdate()', 'color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;');
    return null;
  }

  componentDidUpdate() {
    console.log('%c [App.js] componentDidUpdate()', 'color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;');
  }

  componentWillUnmount() {
    console.log('%c [App.js] componentWillUnmount()', 'color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;');
  }

  state = {
    persons: [
      { id: 'tyuio', name: 'John', age: 22 },
      { id: 'dfghj', name: 'Elizabeth', age: 18 },
      { id: 'cvbmn', name: 'Charles', age: 16 }
    ],
    otherState: 'Some other value',
    personsVisible: true,
    showCockpit: true
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
    console.log('%c [App.js] render()', 'color: lime; background-color: #000; padding: 3px 5px; border-radius: 3px;');
    let persons = null;

    if (this.state.personsVisible) {
      persons = (
        <div>
          <Persons persons={this.state.persons} clicked={this.deletePerson} changed={this.inputChangeHandler} />
        </div>
      );
    }

    return (
      <WithClass classes={classes.App}>
        <button onClick={() => { this.setState({ showCockpit: false }) }} style={{ backgroundColor: 'red', color: 'white', fontWeight: 'bold', fontSize: 18 }}>Remove Cockpit</button>
        {
          this.state.showCockpit ? <Cockpit personsLength={this.state.persons.length} visible={this.state.personsVisible} resetPersons={this.resetPersons} togglePersons={this.togglePersons} /> : null
        }
        {persons}
      </WithClass>
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

// ? React.memo() Functional Component & Class-based {PureComponent} checks whether to render or not on every change